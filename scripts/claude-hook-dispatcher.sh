#!/usr/bin/env bash
set -euo pipefail

echo "[claude-hook] files:" "$@"

# Lint & format only changed files
if command -v npx >/dev/null 2>&1; then
  npx eslint --fix "$@" || true
  npx prettier --write "$@" || true
fi

# Fast unit tests (skip gracefully if vitest not installed)
if command -v vitest >/dev/null 2>&1 || npx --yes vitest -v >/dev/null 2>&1; then
  npx vitest run --changed || exit 2
fi

exit 0