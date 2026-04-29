---
name: deplane-dep-markdown
description: Generate consolidated English and French Markdown Data Element Profile (DEP) documents from open-data/deplane publishing rules and open-data/ckanext-canada YAML schemas/choices. Use when asked to rebuild, update, consolidate, or reproduce DEP Markdown files from deplane/ckanext-canada sources.
---

# Deplane DEP Markdown

Use this skill to create two consolidated Markdown files:

- `all-dep-en.md`
- `all-dep-fr.md`

The output is generated from `open-data/ckanext-canada` source YAML schemas and choices, while following the field filtering, labels, translations, controlled lists, and National Action Plan extras used by `open-data/deplane`.

## Required Inputs

Use local copies of both repositories when available:

- `deplane-master/`
- `ckanext-canada-master/`

If missing, download the public GitHub archives:

- `https://github.com/open-data/deplane/archive/refs/heads/master.zip`
- `https://github.com/open-data/ckanext-canada/archive/refs/heads/master.zip`

Relevant source paths:

- deplane publishing logic: `deplane-master/deplane/publish.py`
- deplane French gettext catalog: `deplane-master/deplane/i18n/fr/LC_MESSAGES/deplane.mo`
- ckanext schemas: `ckanext-canada-master/ckanext/canada/tables/*.yaml`
- ckanext choices: `ckanext-canada-master/ckanext/canada/tables/choices/*`

## Workflow

1. Ensure both source repositories are present locally.
2. Ensure Python can import `yaml` / PyYAML. If needed, install it into a workspace-local folder, for example `.codex-python-deps`.
3. Run the bundled generator script from the workspace root:

```powershell
$env:PYTHONPATH = ".codex-python-deps"
python deplane-dep-markdown-skill/scripts/generate_dep_markdown.py `
  --deplane deplane-master `
  --ckanext ckanext-canada-master `
  --out .
```

If using the Codex bundled Python:

```powershell
$env:PYTHONPATH = ".codex-python-deps"
C:\Users\patjl\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe `
  deplane-dep-markdown-skill/scripts/generate_dep_markdown.py `
  --deplane deplane-master `
  --ckanext ckanext-canada-master `
  --out .
```

4. Verify both files contain 20 profile sections and 20 source YAML markers:

```powershell
Select-String -Path all-dep-en.md -Pattern '^# Data Element Profile:' | Measure-Object
Select-String -Path all-dep-fr.md -Pattern '^# Profil des éléments de données:' | Measure-Object
Select-String -Path all-dep-en.md -Pattern '_Source YAML:' | Measure-Object
Select-String -Path all-dep-fr.md -Pattern '_Source YAML:' | Measure-Object
```

## Output Rules

- Use the DEP order from `deplane-master/dep/*-en.docx` when present, because that mirrors the published document set.
- Otherwise use all top-level YAML files in `ckanext/canada/tables`, sorted by filename.
- Include only fields matching deplane's published DEP behavior:
  - skip `import_template_include: false`
  - skip fields not visible to public
  - skip `owner_org` and `owner_org_title`
- Resolve `choices_file` from `ckanext/canada/tables/choices`.
- Include English and French controlled-list labels in both language outputs.
- For `nap5` and `nap6`, include extra controlled-list metadata for due dates, deadlines, lead departments, and Summit for Democracy where present.
- Preserve bilingual field details in each output, as deplane's DEP documents do.
- In each DEP profile's published resources section, call CKAN `resource_show` for each resource id and use `name_translated` (fallback `name`) as the resource link label/title in the document.

## Validation Notes

PowerShell may display UTF-8 accents as mojibake in terminal output. Validate encoding by reading the files with Python `encoding='utf-8'` if needed; the Markdown files themselves should be written as UTF-8.

The generated Markdown is intentionally source-derived. Prefer regenerating from YAML over editing the consolidated Markdown by hand.
