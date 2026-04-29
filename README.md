# DEP Knowledge Base

Static GitHub Pages knowledge base for Data Element Profiles (DEP) and related agent skills.

## Local preview

From this folder:

```powershell
python -m http.server 8000
```

Open `http://localhost:8000`.

## Content

- DEP Markdown: per-profile bilingual files in `content/dep/*-en.md` and `content/dep/*-fr.md`
- Agent skill: `content/skills/deplane-dep-markdown/SKILL.md`
- `SKILLS.md`
- Repeatable DEP generator: `content/skills/deplane-dep-markdown/generate_dep_markdown.py`
- DEP document UX: each per-profile DEP page now includes a top Table of Contents that links to anchored H2 sections, self-linking H2 headings, and a collapsible Legend section (`<details>`).
- Resource section naming: each published-resource section heading is sourced from CKAN `resource_show` titles (`name_translated`, fallback `name`) to match recombinant schema resource names.

## GitHub Pages

This repo includes `.github/workflows/pages.yml`. Push to `main`, then enable GitHub Pages with GitHub Actions as the source.

If GitHub CLI and Git are installed and authenticated, create and push the repo with:

```powershell
.\tools\publish-github.ps1 -RepoName dep-knowledge-base -Visibility private
```

## Updating DEP Content

Regenerate the consolidated DEP Markdown with the included skill/generator, then replace:

- `content/dep/*-en.md`
- `content/dep/*-fr.md`
