---
title: GC Design System CDN setup
order: 2
description: How this documentation site consumes GCDS through CDN assets.
---

## 1) Select how to receive updates

Use `@latest` to get automatic updates.

### Recommended for quick setup: `@latest`

Use the `@latest` tag to pull the most recent version of GC Design System into your project by replacing the version segment in CDN URLs.

> Tradeoff: `@latest` removes manual version bumping but can introduce breaking changes automatically.

## 2) Add CSS Shortcuts stylesheet

This site includes GC Design System CSS Shortcuts utilities to speed up layout and component styling while staying aligned with the design system.

You can include CSS Shortcuts alongside your existing CSS. As with component bundles, you can use `@latest` for automatic updates.

## CDN used in this site

- `https://cdn.jsdelivr.net/npm/@cdssnc/gcds-components@latest/dist/gcds/gcds.css`
- `https://cdn.jsdelivr.net/npm/@cdssnc/gcds-utility@latest/dist/gcds-utility.min.css`
- `https://cdn.jsdelivr.net/npm/@cdssnc/gcds-components@latest/dist/gcds/gcds.esm.js`
