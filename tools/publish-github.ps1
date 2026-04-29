param(
  [Parameter(Mandatory = $true)]
  [string]$RepoName,

  [ValidateSet("public", "private", "internal")]
  [string]$Visibility = "private"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  throw "git is not available on PATH."
}

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  throw "GitHub CLI (gh) is not available on PATH."
}

if (-not (Test-Path ".git")) {
  git init
  git branch -M main
}

git add .
git commit -m "Create DEP knowledge base static site"

$visibilityArg = "--$Visibility"
gh repo create $RepoName $visibilityArg --source . --remote origin --push

Write-Host "Repository created and pushed. In GitHub, set Pages source to GitHub Actions if it is not already enabled."
