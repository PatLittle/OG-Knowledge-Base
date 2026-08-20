---
name: aia-survey-csv
description: "Use this skill when an agent needs to generate the Algorithmic Impact Assessment (AIA) question/max-score CSV from canada-ca/aia-eia-js survey-enfr.json, or from another compatible SurveyJS AIA survey file. It preserves the legacy scoring rules and excludes implementation-stage duplicates."
---

# AIA Survey CSV

Generate a CSV of AIA questions and the maximum score associated with each question.

## Default source

Use the current bilingual survey definition:

`https://raw.githubusercontent.com/canada-ca/aia-eia-js/refs/heads/master/src/survey-enfr.json`

The bundled script uses this URL by default, so no source argument is required for the normal case.

## Required workflow

1. Run the bundled script:
   ```bash
   python scripts/generate_aia_survey_csv.py --output survey-enfr.csv
   ```
2. Confirm the command exits successfully and reports the number of questions written.
3. Inspect the CSV header and a few rows before returning the file to the user.
4. Return or save `survey-enfr.csv` as requested.

Do not manually reconstruct the score table when the script can be run.

## Output schema

Default output is intentionally compatible with the original utility:

```text
Question,Max Score
```

To include the French question title:

```bash
python scripts/generate_aia_survey_csv.py \
  --output survey-enfr.csv \
  --include-french
```

This produces:

```text
Question,Question FR,Max Score
```

## Scoring rules

Preserve these rules:

- `checkbox`: add all encoded choice scores.
- `radiogroup`: use the highest encoded choice score.
- `dropdown`: use the highest encoded choice score.
- `comment`: score is `0` when there are no scored choices.
- `text`: score is `0` when there are no scored choices.
- Scores are encoded at the end of choice values after the final hyphen, for example `item6-1` has score `1`.
- Choice values without a score suffix have score `0`.
- Exclude dictionaries whose `visibleIf` condition makes them implementation-stage only (`projectDetailsPhase = "item2"`). These duplicate design-stage questions.
- Preserve source order. Do not deduplicate questions by title beyond excluding implementation-stage branches.

## Alternate source

The script can read another compatible HTTPS URL or a local JSON file:

```bash
python scripts/generate_aia_survey_csv.py \
  --source path/to/survey-enfr.json \
  --output survey-enfr.csv
```

or:

```bash
python scripts/generate_aia_survey_csv.py \
  --source https://example.invalid/survey-enfr.json \
  --output survey-enfr.csv
```

## Dependencies

Python 3.9+ standard library only. Do not install `requests`, `pandas`, or other packages for this task.

## Verification

At minimum verify:

- the output file exists;
- the header is correct;
- `Max Score` values are integers;
- implementation-stage duplicate branches were not included;
- the script printed a non-zero question count for the standard AIA source.

If the upstream survey changes in a way that breaks parsing, inspect the changed SurveyJS structure before altering the scoring rules.
