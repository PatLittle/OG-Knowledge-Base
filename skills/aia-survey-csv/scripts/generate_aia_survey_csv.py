#!/usr/bin/env python3
"""
Generate a CSV of AIA survey questions and their maximum scores.

By default this reads the Government of Canada AIA bilingual SurveyJS definition:
https://raw.githubusercontent.com/canada-ca/aia-eia-js/refs/heads/master/src/survey-enfr.json

The default CSV schema is compatible with the original utility:
    Question,Max Score

Use --include-french to also include the French question text.
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import sys
from pathlib import Path
from typing import Any
from urllib.parse import urlparse
from urllib.request import Request, urlopen

DEFAULT_SOURCE = (
    "https://raw.githubusercontent.com/canada-ca/"
    "aia-eia-js/refs/heads/master/src/survey-enfr.json"
)
DEFAULT_OUTPUT = "survey-enfr.csv"

# Preserve the original scoring semantics.
QUESTION_SCORE_FUNCTION = {
    "checkbox": sum,
    "radiogroup": max,
    "dropdown": max,
    "comment": sum,
    "text": sum,
}

# Implementation-stage questions duplicate design-stage questions in this survey.
IMPLEMENTATION_PHASE_RE = re.compile(
    r"""\{projectDetailsPhase\}\s*={1,2}\s*["']item2["']""",
    re.IGNORECASE,
)

# Survey values encode the score after the final hyphen, e.g. item6-1.
SCORE_SUFFIX_RE = re.compile(r"-(-?\d+)$")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Generate a CSV of AIA questions and maximum scores from survey-enfr.json."
        )
    )
    parser.add_argument(
        "--source",
        default=DEFAULT_SOURCE,
        help="Survey JSON URL or local file path.",
    )
    parser.add_argument(
        "--output",
        default=DEFAULT_OUTPUT,
        help=f"Output CSV path (default: {DEFAULT_OUTPUT}).",
    )
    parser.add_argument(
        "--include-french",
        action="store_true",
        help="Add a 'Question FR' column containing the French title.",
    )
    return parser.parse_args()


def load_json(source: str) -> dict[str, Any]:
    """Load JSON from an HTTPS URL, file:// URL, or local path."""
    parsed = urlparse(source)

    if parsed.scheme in {"http", "https"}:
        request = Request(
            source,
            headers={"User-Agent": "aia-survey-csv/1.0"},
        )
        with urlopen(request, timeout=60) as response:
            return json.load(response)

    if parsed.scheme == "file":
        path = Path(parsed.path)
    else:
        path = Path(source)

    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def is_implementation_phase(node: dict[str, Any]) -> bool:
    """Return True when this node belongs only to project phase item2."""
    visible_if = node.get("visibleIf")
    return isinstance(visible_if, str) and bool(
        IMPLEMENTATION_PHASE_RE.search(visible_if)
    )


def parse_value_score(value: Any) -> int:
    """
    Parse a score encoded in a SurveyJS choice value.

    Examples:
      item6-1 -> 1
      item9-15 -> 15
      item4--1 -> -1
      001 -> 0
    """
    match = SCORE_SUFFIX_RE.search(str(value))
    return int(match.group(1)) if match else 0


def collect_value_scores(question: dict[str, Any]) -> list[int]:
    """Collect encoded scores from a question's choices."""
    scores: list[int] = []
    choices = question.get("choices", [])

    if not isinstance(choices, list):
        return scores

    for choice in choices:
        value = choice.get("value") if isinstance(choice, dict) else choice
        scores.append(parse_value_score(value))

    return scores


def localized_text(value: Any, language: str) -> str:
    """Return SurveyJS localized text, tolerating string or dictionary forms."""
    if isinstance(value, str):
        return value.strip()

    if isinstance(value, dict):
        if language == "fr":
            candidate = value.get("fr", value.get("default", ""))
        else:
            candidate = value.get("default", value.get("en", ""))
        return str(candidate or "").strip()

    return ""


def max_score(question: dict[str, Any]) -> int:
    """Calculate maximum score using the original question-type rules."""
    question_type = question.get("type")
    score_function = QUESTION_SCORE_FUNCTION[question_type]
    scores = collect_value_scores(question)

    # sum([]) is 0; max([]) would raise, so unscored single-choice questions
    # are explicitly treated as zero.
    if not scores:
        return 0

    return int(score_function(scores))


def collect_questions(
    survey_data: dict[str, Any],
    include_french: bool = False,
) -> list[list[Any]]:
    """
    Recursively collect design-stage questions in source order.

    This intentionally mirrors the original traversal behaviour: once a
    recognized question is added, nested properties of that question are not
    recursively processed.
    """
    rows: list[list[Any]] = []

    def walk(value: Any) -> None:
        if isinstance(value, dict):
            if is_implementation_phase(value):
                return

            question_type = value.get("type")
            if question_type in QUESTION_SCORE_FUNCTION:
                title = localized_text(value.get("title"), "en")
                if title:
                    row: list[Any] = [title]
                    if include_french:
                        row.append(localized_text(value.get("title"), "fr"))
                    row.append(max_score(value))
                    rows.append(row)
                return

            for child in value.values():
                walk(child)

        elif isinstance(value, list):
            for child in value:
                walk(child)

    walk(survey_data)
    return rows


def write_csv(
    rows: list[list[Any]],
    output: str,
    include_french: bool = False,
) -> None:
    """Write rows to CSV."""
    output_path = Path(output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    header = ["Question"]
    if include_french:
        header.append("Question FR")
    header.append("Max Score")

    with output_path.open("w", encoding="utf-8", newline="") as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(header)
        writer.writerows(rows)


def main() -> int:
    args = parse_args()
    try:
        survey_data = load_json(args.source)
        rows = collect_questions(
            survey_data,
            include_french=args.include_french,
        )
        write_csv(
            rows,
            args.output,
            include_french=args.include_french,
        )
    except Exception as exc:
        print(f"Error: {exc}", file=sys.stderr)
        return 1

    print(f"Wrote {len(rows)} questions to {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
