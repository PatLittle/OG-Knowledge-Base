# Open Government Knowledge Base / Base de connaissances du gouvernement ouvert

Bilingual reference materials, utilities, tutorials and documentation for Government of Canada data publishers and advanced users of Open.Canada.ca.

- [English](https://patlittle.github.io/OG-Knowledge-Base/en/)
- [Français](https://patlittle.github.io/OG-Knowledge-Base/fr/)

## Develop and publish

Requires Node.js 22 or newer and Python 3 (site validation only).

```sh
npm ci
npm run build
npm test
```

GitHub Actions builds, validates and deploys `dist/` after every push to `main`. Generated HTML is also committed at the repository root for compatibility with the existing branch-based Pages publication. Run the build before committing content edits so both publishing paths serve the same site. No content is fetched at build or page-load time: the licence Markdown is committed to this repository. GCDS components load from the official CDN, pinned to **1.6.0**.

For a local preview of the project-path URLs:

```sh
mkdir -p /tmp/og-kb-preview
ln -s "$PWD/dist" /tmp/og-kb-preview/OG-Knowledge-Base
python3 -m http.server 8000 --directory /tmp/og-kb-preview
```

Visit `http://localhost:8000/OG-Knowledge-Base/`.

## Structure and additional sections

- `templates/page.html`: shared GCDS header, navigation, language toggle, metadata and footer.
- `assets/site.css`: responsive documentation layout and small shared visual overrides.
- `scripts/build.mjs`: static generation, bilingual page pairing and licence rendering.
- `scripts/check_site.py`: links, anchors, language pairs, metadata and source integrity checks.
- `content/ogl/{en,fr}/`: licence source Markdown with local screenshot references.
- `content/ogl/versions.json`: language-specific provenance and version metadata.

Each major section should own its content directory and localized URL paths. Reuse the page template, provide both language versions, and pair matching pages through the builder. Canonical URLs are self-referencing; reciprocal `hreflang` alternatives and the GCDS language toggle point to the corresponding translated page. The root offers a bilingual language choice.

## Licence collection

Imported from the supplied bilingual licence collection on 2026-10-12. Includes versions 1.0, 1.1 and 2.0. The files named `v2_0_1` describe themselves as **version 2.0** and are displayed accordingly. Source dates, archive URLs and screenshot images are preserved. The English and French version 1.1 source pages have different modification dates; neither has been substituted for the other.

Legal text is reproduced without editorial rewriting. Source capture metadata and screenshots appear separately below it; the Markdown is downloadable at the bottom of each version page. Screenshot references use locally stored PNG files in `assets/ogl/{en,fr}/`; the six original screenshot images appear directly in the “Archived Original” section. The repository's MIT licence applies to the site code; reproduced licence documents retain their original terms.

## CKAN metadata schemas

The [English CKAN reference](https://patlittle.github.io/OG-Knowledge-Base/en/ckan-schemas/) and [French reference](https://patlittle.github.io/OG-Knowledge-Base/fr/schemas-ckan/) document the `dataset`, `info` and `organization` schemas. They share the Reference navigation with the licences.

Each definition offers a single full-width Tree, Diagram or JSON view. The tree expands field properties, choices and repeated subfields on demand. The diagram has field-group selection, paging, zoom and a complete field inspector. Both views support field search and an explicit `required: true` filter. JSON can show the schema definition or the entire CKAN API response, with copying and a downloadable snapshot. Labels use the schema's original bilingual values; all JSON keys and values are preserved.

- `content/schemas/config.json`: API base and the initial documented schema types.
- `content/schemas/snapshots/`: full API discovery responses, definitions and retrieval manifest.
- `scripts/fetch_schemas.py`: discovers every dataset and organization type from the list actions, requests all schema definitions, and replaces snapshots only after every request validates. Dataset requests use `expanded=true`; organization requests use the provided parameters.
- `scripts/schema-pages.mjs`: bilingual reference index and schema-page generation.
- `assets/schema-viewer.js`: standalone interactive views, without third-party diagram dependencies.
- `.github/workflows/update-schemas.yml`: daily refresh at 07:15 UTC, manual dispatch, and initial execution when the collector/configuration/workflow changes. Builds, tests, commits snapshots and generated pages, then deploys directly. A bot commit does not trigger another fetch loop.

`prop` is discovered and stored automatically; it has a JSON download on the index. Add a bilingual entry to `config.json` to give a discovered type its own documented page. Removed or unavailable documented types fail validation and preserve the last complete snapshot. Each schema records its last content-change timestamp and SHA-256; the manifest records the last successful API check.

Run `python3 scripts/fetch_schemas.py` before `npm run build` to refresh locally. The ordinary Pages build uses committed snapshots and continues to work when the source API is unavailable.

## Tools: CKAN Feature Atlas (English preview)

The [Feature Atlas](https://patlittle.github.io/OG-Knowledge-Base/en/tools/feature-atlas/) is an interactive, diagram-first explanation of the two PostgreSQL databases powering Open.Canada.ca/data, with CKAN extensions, public Action API examples and a 16-step guided tour. It belongs to the new [Tools](https://patlittle.github.io/OG-Knowledge-Base/en/tools/) section.

- `content/tools/feature-atlas.html`: reviewed standalone Atlas source, kept intact.
- `scripts/integrate-feature-atlas.mjs`: builds the GCDS-framed English page, full-width infographic, Tools navigation, homepage entry and sitemap records.
- No sidebar or iframe is used for the interactive page.
- No French equivalent or `hreflang="fr"` is published until the English feature and French terminology have been reviewed.

