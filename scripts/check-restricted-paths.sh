#!/bin/bash
# Restricted paths preflight check for bot PRs
# Prevents bots from modifying critical infrastructure files
set -euo pipefail

BASE_REF_NAME="${BASE_REF:-main}"
BASE="origin/$BASE_REF_NAME"
HEAD="${HEAD_REF:-HEAD}"
RESTRICTED=(
  ".github/workflows/**"
  "scripts/release/**" 
  ".env*"
  "**/.env*"
)

# Ensure base ref is available for diff (critical security check)
echo "🔍 Fetching base ref for comparison..."
if ! git fetch --depth=1 origin "$BASE_REF_NAME" 2>/dev/null; then
  echo "❌ Failed to fetch base ref '$BASE_REF_NAME' - cannot verify restrictions"
  echo "   This is a security failure - bot branch restrictions cannot be validated"
  exit 1
fi

# Verify base ref exists after fetch
if ! git rev-parse --verify "$BASE" >/dev/null 2>&1; then
  echo "❌ Base ref '$BASE' not found after fetch - security check failed"
  exit 1
fi

echo "✅ Base ref '$BASE' successfully fetched and verified"

# If not a bot branch, exit cleanly
if [[ "${GITHUB_HEAD_REF:-}" != bots/claude/* ]]; then 
  echo "ℹ️ Non-bot branch detected: ${GITHUB_HEAD_REF:-HEAD}"
  echo "✅ Restricted paths check is advisory for non-bot branches"
  
  # Still run the check but only warn, don't fail
  if CHANGED=$(git diff --name-only "$BASE...$HEAD" 2>/dev/null); then
    if [[ -n "$CHANGED" ]]; then
      echo "Changed files in non-bot branch:"
      echo "$CHANGED" | sed 's/^/  - /'
      
      # Check patterns but only warn
      for pat in "${RESTRICTED[@]}"; do
        regex_pat=$(echo "$pat" | sed -e 's/\*\*/.*/g' -e 's/\*/[^\/]*/g')
        if echo "$CHANGED" | grep -E "^${regex_pat}$" >/dev/null 2>&1; then
          echo "ℹ️ ADVISORY: Non-bot branch modified restricted pattern '$pat'"
          echo "   (This would block a bot branch but is allowed for human PRs)"
        fi
      done
    fi
  fi
  exit 0
fi

echo "🛡️  Checking bot branch for restricted path modifications..."

# List changed files (base ref is now guaranteed to exist)
if ! CHANGED=$(git diff --name-only "$BASE...$HEAD" 2>/dev/null); then
  echo "❌ Git diff failed even with fetched base ref - this is a security failure"
  echo "   Cannot determine which files were changed, blocking for safety"
  exit 1
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
  regex_pat=$(echo "$pat" | sed -e 's/\*\*/.*/g' -e 's/\*/[^\/]*/g')
  
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