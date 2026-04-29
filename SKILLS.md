# Skills

## deplane-dep-markdown

Location: `content/skills/deplane-dep-markdown/SKILL.md`

This skill generates DEP Markdown from `open-data/deplane` and `open-data/ckanext-canada` source schemas.

### Published resources behavior

When generating per-profile DEP documents, the published resources section should:

- call CKAN `resource_show` for each published resource id,
- request `name_translated` (with fallback to `name`), and
- render the resource title as the link label in the DEP document.

This keeps published resource links human-readable and aligned with portal metadata.
