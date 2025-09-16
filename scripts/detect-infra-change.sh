#!/bin/bash
# Detect if PR contains only infrastructure changes
set -euo pipefail

BASE="${BASE_REF:-origin/${GITHUB_BASE_REF:-main}}"
HEAD="${HEAD_REF:-HEAD}"

# Ensure base ref is available
git fetch --depth=1 origin "${GITHUB_BASE_REF:-main}" 2>/dev/null || true

# Validate refs exist after fetch
if ! git rev-parse --verify "$HEAD" >/dev/null 2>&1; then
  echo "::error::HEAD ref '$HEAD' does not exist"
  exit 1
fi

if ! git rev-parse --verify "$BASE" >/dev/null 2>&1; then
  echo "::error::BASE ref '$BASE' does not exist"
  exit 1
fi

# Ensure merge-base exists, attempt to deepen if needed
if ! git merge-base "$BASE" "$HEAD" >/dev/null 2>&1; then
  echo "::warning::No merge-base found between $BASE and $HEAD, attempting to deepen fetch"
  git fetch --deepen=50 origin "${GITHUB_BASE_REF:-main}" 2>/dev/null || true
  
  if ! git merge-base "$BASE" "$HEAD" >/dev/null 2>&1; then
    echo "::error::Cannot compute merge-base between $BASE and $HEAD even after deepening fetch"
    exit 1
  fi
fi

# Get changed files with proper error handling
if ! CHANGED=$(git diff --name-only "$BASE...$HEAD" 2>&1); then
  echo "::error::Failed to get diff between $BASE and $HEAD: $CHANGED" >&2
  exit 1
fi

if [[ -z "$CHANGED" ]]; then
  echo "No changes detected, treating as non-infra"
  echo "IS_INFRA_CHANGE=false" >> "$GITHUB_ENV"
  exit 0
fi

echo "Changed files:"
while IFS= read -r _f; do
  [[ -n "$_f" ]] && printf '  - %s\n' "$_f"
done <<< "$CHANGED"

# Check if all files match infrastructure patterns
is_infra=true
while IFS= read -r f; do
  if [[ -n "$f" ]]; then
    # Check if file matches infra patterns
    if [[ "$f" == .github/* || "$f" == scripts/* || "$f" == infra/* || "$f" == */ci/* || "$f" == *.md ]]; then
      echo "  ✅ $f (infrastructure)"
    else
      echo "  ❌ $f (application code)"
      is_infra=false
    fi
  fi
done <<< "$CHANGED"

if [[ "$is_infra" == "true" ]]; then
  echo ""
  echo "🔧 INFRA-ONLY PR: All changes are infrastructure/tooling"
  echo "   - Skipping heavy tests (E2E, build)"
  echo "   - Making strict checks advisory"
else
  echo ""
  echo "📦 MIXED/APP PR: Contains application code changes"
  echo "   - Running full test suite"
  echo "   - Enforcing all quality gates"
fi

echo "IS_INFRA_CHANGE=$is_infra" >> "$GITHUB_ENV"