# Open Government Knowledge Base / Base de connaissances du gouvernement ouvert

Bilingual reference materials, utilities, tutorials and documentation for Government of Canada data publishers and advanced users of Open.Canada.ca.

[English site](https://patlittle.github.io/OG-Knowledge-Base/en/) · [Site français](https://patlittle.github.io/OG-Knowledge-Base/fr/)

## Where to make a change

**Start in [`content/pages/`](content/pages/).** Its folders mirror the website URLs, without the `/OG-Knowledge-Base` prefix. Every published HTML page has one entry there:

- A `.md` file is an editable page, rendered inside the shared site layout.
- An `index.source.json` (or `404.source.json`) is a **pointer**, not another copy of the page. Its `sources` list links to the actual HTML, collection data, translations or renderer used to produce that page. These files are never published as pages.

| Change | Edit |
| --- | --- |
| English or French homepage | `content/pages/en/index.md` or `content/pages/fr/index.md` |
| Add a normal page | A new `.md` under `content/pages/en/` or `content/pages/fr/` |
| Licence wording | `content/ogl/{en,fr}/{version}.md` |
| Licence source dates, archive links or screenshots | `content/ogl/versions.json`; screenshots in `site/assets/ogl/` |
| Licence headings and explanatory text | `content/ogl/labels.json` |
| CKAN schema types and titles | `content/schemas/config.json` |
| CKAN reference labels and explanatory text | `content/schemas/labels.json` |
| Language-choice or not-found page | `site/templates/language-choice.html` or `site/templates/404.html` |
| Collected CKAN definitions | `content/schemas/snapshots/`, normally updated by the collector |
| Feature Atlas interactive source | `content/tools/feature-atlas.html` |
| French Atlas wording | `content/tools/fr/{main,extensions,tour,ui}.json` |
| Standalone bilingual WhatTF8 tool | `content/tools/whattf8.html` |
| Shared header, footer and page layout | `site/templates/page.html` |
| Styling and shared browser behaviour | `site/assets/` |
| Collection layouts and Tools index text | The renderer linked by the page's `.source.json` |

The homepages use HTML inside Markdown to retain their existing GCDS cards. New prose pages can use ordinary Markdown. Licence documents remain verbatim collection sources; they use a specialized layout with provenance, screenshots and Markdown downloads.

## Add a Markdown page

Create `content/pages/en/guides/publishing.md`:

```md
---
title: Publishing a dataset
description: A guide for data publishers.
translation: /fr/guides/publication/
---

Describe the guide here.

## Before you start

Add your guidance, links and lists.
```

This produces `/OG-Knowledge-Base/en/guides/publishing/`. `guides/publishing/index.md` produces the same URL; use one form only. The builder adds the page title as an H1 when the body has none, creates heading anchors, and adds the page to the sitemap. Duplicate page URLs fail the build.

Add the French file with `translation: /en/guides/publishing/`. Translation paths omit the project prefix and must end in `/`; the checks enforce reciprocal language links. For a page that has no translation yet, omit `translation`; it will have no language toggle or alternate-language metadata. Use relative links to **published** paths (for example `../another-guide/`), or full project paths such as `/OG-Knowledge-Base/en/`. Add a link from the relevant homepage or existing page so readers can discover the new page. The global navigation is maintained separately from page creation.

For HTML-first tools, keep the source once in `content/tools/` and place a `.source.json` pointer at its logical location in `content/pages/`. Existing interactive tools demonstrate this pattern. New HTML tools still need a renderer or copy step in the build; pointers document sources and do not execute them. Every output page must have a corresponding Markdown file or pointer, and every pointer target must exist.

## Build, check and preview

Requires **Node.js 22+**, npm and **Python 3.9+** (CI uses 3.12). No Python packages are needed.

```sh
npm ci
npm test
npm run preview
```

`npm test` makes a clean build and runs all checks. `npm run build` builds without checking; `npm run check` checks an existing build. The preview opens at `http://localhost:8000/OG-Knowledge-Base/`; stop it with Ctrl+C and rerun after edits.

```text
content/          Authored pages, HTML tools, translations and collected source data
  pages/          URL-shaped content tree: Markdown pages and source pointers
  ogl/            Original licence text and provenance
  schemas/        Collector configuration and committed API snapshots
  tools/          HTML-first tools and Atlas translations
site/             Shared page template, CSS, browser scripts and images
scripts/          Build/rendering, preview and schema collection commands
tests/            Site, schema, interactive script and content-tree checks
.github/          Shared CI build action and two workflows
dist/             Generated website only; ignored by Git; safe to delete and rebuild
```

The build reads sources and writes **only `dist/`**. Do not edit or commit generated HTML, `sources/` downloads or `data/` API copies. Those directories exist only inside `dist/`. `node_modules/` is also ignored. Existing page URLs, licence downloads and schema JSON URLs are retained.

## Publishing and the Pages setting

The repository uses **GitHub Actions** as its single Pages publishing source. In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions** when adopting this refactor, before merging it. The previous branch-based setting (`main`, `/`) relies on root-level generated copies that this refactor removes. The last published site remains available while the new workflow runs.

`pages.yml` validates pull requests and builds/deploys pushes to `main` or manual runs on `main`. Deployment requires a successful build. Pull requests do not deploy. Both workflows use `.github/actions/build-site/action.yml`, which installs dependencies and runs the same `npm test` command used locally. Publication workflows share one concurrency group so a schema refresh and ordinary deployment cannot overlap.

The previous workflow failed because building changed the committed Atlas HTML and a test required those generated copies to be clean. That requirement and the second publication path are removed. Tests check the built artifact instead: local links and anchors, canonical URLs, language pairs, licence integrity, schema behaviour, Atlas script syntax, and complete source pointers. New pages do not require updating a fixed page count.

## Refresh CKAN schemas

```sh
npm run refresh:schemas
npm test
```

The collector discovers dataset and organization types, requests complete definitions and replaces snapshots only after all responses validate. Dataset requests use `expanded=true`. The daily workflow runs at 07:15 UTC and supports manual runs. It validates the site, commits **only** `content/schemas/snapshots/`, and deploys the tested artifact directly because bot commits do not trigger another push workflow. Failed fetches preserve the previous complete snapshot. Ordinary builds use committed snapshots and do not need the source API.

`prop` is discovered and stored automatically, with a JSON download on the index. Add a bilingual entry to `content/schemas/config.json` to give a discovered type its own documented page, and add source pointers in the page tree. Schema snapshots record content-change timestamps and SHA-256 hashes; the manifest records the last successful API check.

## WhatTF8 encoding inspection

The standalone bilingual source is `content/tools/whattf8.html`. Errors use the GCDS error summary with links to the relevant controls. Binary documents remain unavailable for direct conversion; explicit encoding evidence (a leading BOM, RTF code-page declaration, or supported PDF text/metadata markers) is shown with a warning. An encoding found inside a container is labelled with its scope, rather than presented as a single encoding for the entire document. DOCX and other compressed containers are not unpacked for text inspection.

The inspection table reports the leading BOM and its hexadecimal bytes. Text downloads offer **UTF-8** without a BOM or **UTF-8-SIG** with the `EF BB BF` prefix. This changes the exported copy only. UTF-32 BOMs can be identified, but UTF-32 decoding/conversion is not supported.

URL loading is direct by default. Enabling **Add CORS proxy** reveals a URL field: the source URL is appended to the proxy prefix, URL-encoded. Templates can use `{url}` for that encoded value or `{rawUrl}` for a proxy that expects the original URL. A chosen proxy receives the document URL and contents; it must permit browser CORS requests. No proxy service is configured by default.

## Source and content notes

The licence collection includes versions 1.0, 1.1 and 2.0. Original filenames containing `v2_0_1` identify themselves as **version 2.0**. English and French version 1.1 sources have different modification dates; each retains its own date. Legal text is reproduced without editorial rewriting, with capture metadata and original screenshots presented separately. The MIT licence applies to site code; reproduced documents retain their original terms.

The bilingual Feature Atlas retains its interactive diagrams, public API examples and 16-step tour. Both editions derive from one interactive HTML source, with French text applied from the translation dictionaries. Technical identifiers, API methods and endpoint examples remain unchanged. Tools pages use the standard site frame with no sidebar. GCDS components remain pinned to 1.6.0 from the official CDN.
