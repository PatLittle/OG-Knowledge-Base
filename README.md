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
- `content/ogl/{en,fr}/`: unchanged licence source Markdown.
- `content/ogl/versions.json`: language-specific provenance and version metadata.

Each major section should own its content directory and localized URL paths. Reuse the page template, provide both language versions, and pair matching pages through the builder. Canonical URLs are self-referencing; reciprocal `hreflang` alternatives and the GCDS language toggle point to the corresponding translated page. The root offers a bilingual language choice.

## Licence collection

Imported from [PatLittle's bilingual licence gist](https://gist.github.com/PatLittle/f7c475d2c47ad30ec73c3b1e9f52f7ae) on 2026-10-12. Includes versions 1.0, 1.1 and 2.0. The files named `v2_0_1` describe themselves as **version 2.0** and are displayed accordingly. Source dates, archive URLs and screenshots are preserved. The English and French version 1.1 source pages have different modification dates; neither has been substituted for the other.

Legal text is reproduced without editorial rewriting. Source capture metadata and screenshots appear separately below it; full original Markdown is downloadable. The repository's MIT licence applies to the site code; reproduced licence documents retain their original terms.
