param(
  [string]$SourceRoot = ".."
)

$ErrorActionPreference = "Stop"

$siteRoot = Split-Path -Parent $PSScriptRoot
$source = Resolve-Path $SourceRoot

Copy-Item -Path (Join-Path $source "all-dep-en.md") -Destination (Join-Path $siteRoot "content/dep/all-dep-en.md") -Force
Copy-Item -Path (Join-Path $source "all-dep-fr.md") -Destination (Join-Path $siteRoot "content/dep/all-dep-fr.md") -Force
Copy-Item -Path (Join-Path $source "deplane-dep-markdown-skill/SKILL.md") -Destination (Join-Path $siteRoot "content/skills/deplane-dep-markdown/SKILL.md") -Force
Copy-Item -Path (Join-Path $source "deplane-dep-markdown-skill/scripts/generate_dep_markdown.py") -Destination (Join-Path $siteRoot "content/skills/deplane-dep-markdown/generate_dep_markdown.py") -Force

Write-Host "Content updated in $siteRoot"
