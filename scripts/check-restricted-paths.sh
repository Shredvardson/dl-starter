#!/bin/bash
# Restricted paths preflight check for bot PRs
# Prevents bots from modifying critical infrastructure files
set -euo pipefail

BASE="${BASE_REF:-origin/main}"
HEAD="${HEAD_REF:-HEAD}"
RESTRICTED=(
  ".github/workflows/**"
  "scripts/release/**" 
  ".env*"
  "**/.env*"
)

# If not a bot branch, exit cleanly
if [[ "${GITHUB_HEAD_REF:-}" != bots/claude/* ]]; then 
  echo "✅ Non-bot branch, skipping restricted paths check"
  exit 0
fi

echo "🛡️  Checking bot branch for restricted path modifications..."

# List changed files
if ! CHANGED=$(git diff --name-only "$BASE...$HEAD" 2>/dev/null); then
  echo "⚠️  Unable to get diff, assuming clean (may be new branch)"
  exit 0
fi

if [[ -z "$CHANGED" ]]; then
  echo "✅ No files changed in bot branch"
  exit 0
fi

echo "Changed files:"
echo "$CHANGED" | sed 's/^/  - /'

# Check each restricted pattern
for pat in "${RESTRICTED[@]}"; do
  # Convert glob pattern to regex for grep
  regex_pat=$(echo "$pat" | sed 's/\*\*/.*/' | sed 's/\*/[^\/]*/')
  
  if echo "$CHANGED" | grep -E "^${regex_pat}$" >/dev/null 2>&1; then
    echo "❌ RESTRICTED PATH VIOLATION: Bot branch modified files matching '$pat'"
    echo "   This violates security policy - bots cannot modify:"
    echo "   - CI/CD workflows (.github/workflows/**)"
    echo "   - Release scripts (scripts/release/**)" 
    echo "   - Environment files (.env*, **/.env*)"
    exit 1
  fi
done

echo "✅ No restricted paths touched by bot branch"
echo "🤖 Bot modifications are within allowed scope"