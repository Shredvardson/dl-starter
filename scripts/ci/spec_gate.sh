#!/usr/bin/env bash
set -euo pipefail

# Inputs from GitHub Actions
EVENT_PATH="${GITHUB_EVENT_PATH:-}"
BASE_REF="${GITHUB_BASE_REF:-}"

if ! command -v jq >/dev/null; then
  echo "jq is required on CI runner"; exit 1
fi

PR_BODY="$(jq -r '.pull_request.body // ""' "$EVENT_PATH")"
if [[ -z "$PR_BODY" ]]; then
  echo "::error::PR body is empty. Include 'Spec-ID: <id>'"; exit 1
fi

if [[ "$PR_BODY" =~ Spec-ID:[[:space:]]*([0-9]{3}) ]]; then
  SPEC_ID="${BASH_REMATCH[1]}"
else
  echo "::error::Missing 'Spec-ID: <id>' in PR body (e.g. 'Spec-ID: 001')"; exit 1
fi

# Find spec file
SPEC_PATH="$(ls -d specs/${SPEC_ID}-* 2>/dev/null || true)"
if [[ -z "$SPEC_PATH" ]] || [[ ! -f "$SPEC_PATH/spec.md" ]]; then
  echo "::error::Spec file not found at /specs/${SPEC_ID}-*/spec.md"; exit 1
fi

# Word cap
WORDS=$(wc -w < "$SPEC_PATH/spec.md" | tr -d ' ')
if [[ "$WORDS" -gt 900 ]]; then
  echo "::error::Spec exceeds 900 words ($WORDS). Trim it."; exit 1
fi

# Determine changed files vs base ref
git fetch --no-tags --depth=1 origin "${BASE_REF}"
CHANGED=$(git diff --name-only "origin/${BASE_REF}...HEAD")

# If app/package code changed, require tests changed
if echo "$CHANGED" | grep -Eq '^(apps/|packages/)' ; then
  if ! echo "$CHANGED" | grep -Eqi '(^|/)(tests?|e2e|__tests__)/|(\.test|\.spec)\.(t|j)sx?' ; then
    echo "::error::Code changed under apps/ or packages/ but no tests changed. Add/modify unit or e2e tests."
    echo "Changed files:"; echo "$CHANGED"
    exit 1
  fi
fi
echo "Spec gate passed for Spec-ID ${SPEC_ID}."