#!/usr/bin/env python
"""Generate consolidated deplane DEP Markdown from ckanext-canada YAML."""

from __future__ import annotations

import argparse
import gettext
import json
from pathlib import Path
import sys

try:
    import yaml
except ImportError as exc:  # pragma: no cover - useful CLI failure
    raise SystemExit(
        "PyYAML is required. Install it into the workspace, e.g. "
        "`python -m pip install PyYAML -t .codex-python-deps`, then set "
        "`PYTHONPATH=.codex-python-deps`."
    ) from exc


OBLIGATION = {
    "mandatory": "Mandatory",
    "conditional": "Mandatory, conditional",
    "optional": "Optional",
}

FORMAT_TYPE = {
    "bigint": "Integer",
    "int": "Integer",
    "year": "Integer",
    "month": "Integer",
    "numeric": "Numeric",
    "money": "Numeric",
    "text": "Text",
    "_text": "Text Array",
    "text array": "Text Array",
    "date": "Date",
    "timestamp": "Timestamp",
}

VALIDATION = {"This field must not be empty"}


def pick(value, lang, default=""):
    if isinstance(value, dict):
        return value.get(lang) or value.get("en") or value.get("fr") or default
    if value is None:
        return default
    return str(value)


def visible(value):
    if isinstance(value, str):
        return value.strip().lower() not in {"no", "false", "0"}
    return bool(value)


def cell(value):
    text = "" if value is None else str(value)
    lines = []
    for raw in text.replace("\r", "").split("\n"):
        line = raw.strip()
        if line:
            lines.append(line.replace("|", r"\|"))
    return "<br>".join(lines) if lines else " "


def table(headers, rows):
    width = len(headers)
    out = ["| " + " | ".join(cell(h) for h in headers) + " |"]
    out.append("| " + " | ".join(["---"] * width) + " |")
    for row in rows:
        row = list(row) + [""] * (width - len(row))
        out.append("| " + " | ".join(cell(c) for c in row[:width]) + " |")
    return "\n".join(out)


def obligation(field, lang, trans):
    value = field.get("obligation", "optional")
    if isinstance(value, dict):
        value = value.get(lang)
    if not value:
        value = "Optional"
    key = str(value).lower()
    if key in OBLIGATION:
        value = OBLIGATION[key]
    return trans.gettext(str(value))


def validation(field, lang, trans):
    value = field.get("validation", "")
    if isinstance(value, dict):
        value = value.get(lang, "")
    elif isinstance(value, str) and value in VALIDATION:
        value = trans.gettext(value)
    return value or ""


def load_choices(base_tables, field):
    if "choices_file" not in field:
        return field.get("choices")
    path = base_tables / field["choices_file"]
    if not path.exists():
        return field.get("choices")
    if path.suffix == ".json":
        return json.loads(path.read_text(encoding="utf-8-sig"))
    return yaml.safe_load(path.read_text(encoding="utf-8-sig"))


def add_legend(parts, trans):
    _ = trans.gettext
    parts.extend(
        [
            f"## {_('Legend')}",
            "",
            _("The following sample table provides a description of each field you will see for all elements:"),
            "",
        ]
    )
    parts.append(
        table(
            [_("Attribute"), _("Attribute Description")],
            [
                [_("Field Name EN"), _("This text should correspond directly with the field name in your template in English")],
                [_("Field Name FR"), _("This text should correspond directly with the field name in your template in French")],
                [_("Description EN"), _("This provides a brief description of the element in English")],
                [_("Description FR"), _("This provides a brief description of the element in French")],
                [_("Obligation"), _("Indicates whether the element is required to always or sometimes be present \n(i.e., contain a value). Options are:\n\n- Mandatory\n- Mandatory, conditional\n- Optional")],
                [_("Format Type"), _("Options are:\n\n- Integer (e.g. page count, year or month number)\n- Numeric (e.g. decimal, currency values)\n- Text\n- Text Array (e.g. one or more codes from a controlled list)\n- Date (YYYY-MM-DD)\n- Timestamp (YYYY-MM-DD hh:mm:ss)")],
                [_("Validation EN"), _("Describes the condition or conditions according to which a value shall be present in English.\nIndicates what the system will accept in this field.")],
                [_("Validation FR"), _("Describes the condition or conditions according to which a value shall be present in French.\nIndicates what the system will accept in this field.")],
                [_("Example Value"), _("Provide one or more real examples of the values that may appear, e.g. “CODE1” or “Family Services Reform Program”")],
            ],
        )
    )
    parts.extend(
        [
            "",
            _("\nControlled List Values:").strip(),
            "",
            table(
                [_("Code"), _("English"), _("French")],
                [
                    ["CODE1", _("English Description 1"), _("French Description 1")],
                    ["CODE2", _("English Description 2"), _("French Description 2")],
                ],
            ),
            "",
        ]
    )


def add_choices(parts, choices, trans, is_nap, nap_version):
    if not choices:
        return
    _ = trans.gettext
    parts.extend([_("\nControlled List Values:").strip(), ""])
    rows = []
    extras = []
    iterator = choices.items() if isinstance(choices, dict) else enumerate(choices)
    for code, value in iterator:
        code = str(code)
        if isinstance(value, dict):
            rows.append([code, value.get("en", ""), value.get("fr", "")])
            if is_nap and any(k in value for k in ("due_date", "deadline", "lead_dept", "s4d")):
                extra_rows = []
                if nap_version == 5:
                    extra_rows.append([_("Due Date"), value.get("due_date") or "TODO - supply value (must be one of reporting_period values)"])
                deadline = value.get("deadline") or {}
                extra_rows.append([_("Deadline (English)"), deadline.get("en") or 'TODO - supply value (semantics e.g. "First of June 2026")'])
                extra_rows.append([_("Deadline (French)"), deadline.get("fr") or 'TODO - supply value (semantics e.g. "First of June 2026")'])
                lead = value.get("lead_dept") or "TODO - supply value (must be organization abbreviation found here: https://open.canada.ca/data/en/api/action/organization_list)"
                if isinstance(lead, list):
                    lead = ",".join(lead)
                extra_rows.append([_("Lead Department"), lead])
                if nap_version == 5:
                    extra_rows.append([_("Summit for Democracy"), value.get("s4d") or 'TODO - supply value (must be "true" or "false")'])
                extras.append((code, extra_rows))
        else:
            rows.append([code, value, value])
    parts.extend([table([_("Code"), _("English"), _("French")], rows), ""])
    for code, extra_rows in extras:
        parts.extend([_("Extras for: %s") % code, "", table([_("Extra Value"), ""], extra_rows), ""])


def convert_schema(name, schema, lang, base_tables, en_trans, fr_trans):
    trans = fr_trans if lang == "fr" else en_trans
    _ = trans.gettext
    title = pick(schema.get("title"), lang, name)
    parts = [f"# {_('Data Element Profile')}: {title}", "", f"_Source YAML: `{name}.yaml`_", ""]
    if schema.get("front_matter"):
        parts.extend([pick(schema["front_matter"], lang), ""])
    add_legend(parts, trans)
    for rnum, res in enumerate(schema.get("resources") or [], 1):
        parts.extend([f"## {pick(schema.get('title'), lang, title)}", ""])
        rname = res.get("resource_name", "")
        is_nap = rname.startswith("nap") and rname[3:].isdigit()
        nap_version = int(rname[3:]) if is_nap else None
        for fnum, field in enumerate(res.get("fields") or [], 1):
            fid = field.get("id", field.get("datastore_id"))
            if not field.get("import_template_include", True):
                continue
            if not visible(field.get("visible_to_public", True)):
                continue
            if fid in {"owner_org", "owner_org_title"}:
                continue
            flabel_en = pick(field.get("label"), "en")
            flabel_fr = pick(field.get("label"), "fr")
            if flabel_fr == flabel_en:
                flabel_fr = ""
            typ = field.get("type", field.get("datastore_type"))
            rows = [
                [_("Field Name EN"), flabel_en],
                [_("Field Name FR"), flabel_fr],
                [_("ID"), fid],
                [_("Description EN"), pick(field.get("description"), "en")],
                [_("Description FR"), pick(field.get("description"), "fr")],
                [_("Obligation EN"), obligation(field, "en", en_trans)],
                [_("Obligation FR"), obligation(field, "fr", fr_trans)],
                [_("Occurrence"), _(pick(field.get("occurrence"), lang, "Single"))],
                [_("Format Type"), _(FORMAT_TYPE.get(typ, str(typ)))],
                [_("Validation EN"), validation(field, "en", en_trans)],
                [_("Validation FR"), validation(field, "fr", fr_trans)],
            ]
            limit = field.get("character_limit", field.get("max_chars"))
            if limit:
                rows.append([_("Character Limit"), str(limit)])
            examples = res.get("example_record", (res.get("examples") or {}).get("record") or {})
            if not field.get("published_resource_computed_field", False) and isinstance(examples, dict) and examples.get(fid):
                example = examples[fid]
                if isinstance(example, list):
                    example = ",".join(str(x) for x in example)
                rows.append([_("Example Value"), str(example)])
            parts.extend([f"### {rnum}-{fnum} {pick(field.get('label'), lang, fid)}", ""])
            parts.extend([table([_("Attribute"), _("Attribute Description")], rows), ""])
            add_choices(parts, load_choices(base_tables, field), trans, is_nap, nap_version)
    while parts and parts[-1] == "":
        parts.pop()
    return "\n".join(parts) + "\n"


def schema_names(deplane_dir, base_tables):
    dep_dir = deplane_dir / "dep"
    docx_names = sorted(p.name.replace("-en.docx", "") for p in dep_dir.glob("*-en.docx"))
    if docx_names:
        return docx_names
    return sorted(p.stem for p in base_tables.glob("*.yaml"))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--deplane", type=Path, required=True)
    parser.add_argument("--ckanext", type=Path, required=True)
    parser.add_argument("--out", type=Path, default=Path("."))
    args = parser.parse_args()

    base_tables = args.ckanext / "ckanext" / "canada" / "tables"
    i18n_dir = args.deplane / "deplane" / "i18n"
    en_trans = gettext.NullTranslations()
    fr_trans = gettext.translation("deplane", i18n_dir, languages=["fr"])
    names = schema_names(args.deplane, base_tables)
    args.out.mkdir(parents=True, exist_ok=True)

    loaded = []
    for name in names:
        schema_path = base_tables / f"{name}.yaml"
        if not schema_path.exists():
            raise SystemExit(f"Missing schema: {schema_path}")
        loaded.append((name, yaml.safe_load(schema_path.read_text(encoding="utf-8-sig"))))

    for lang in ("en", "fr"):
        chunks = [
            f"# Consolidated Data Element Profiles ({lang.upper()})",
            "",
            "Generated from source YAML schemas in `ckanext-canada/ckanext/canada/tables` and local choices files, following `open-data/deplane` publishing rules.",
            "",
            f"Total profiles: {len(loaded)}",
            "",
            "## Included profiles",
            "",
        ]
        for name, schema in loaded:
            chunks.append(f"- `{name}.yaml`: {pick(schema.get('title'), lang, name)}")
        chunks.append("")
        for idx, (name, schema) in enumerate(loaded, 1):
            chunks.append(convert_schema(name, schema, lang, base_tables, en_trans, fr_trans))
            if idx != len(loaded):
                chunks.append("\n---\n")
        out_file = args.out / f"all-dep-{lang}.md"
        out_file.write_text("\n".join(chunks), encoding="utf-8", newline="\n")
        print(f"Wrote {out_file} ({out_file.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
