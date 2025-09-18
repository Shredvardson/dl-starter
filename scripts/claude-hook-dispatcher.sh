#!/usr/bin/env bash
set -euo pipefail

echo "[claude-hook] Smart Dispatcher processing files:" "$@"

# Exit early if no files provided
if [ $# -eq 0 ]; then
  echo "[claude-hook] No files to process"
  exit 0
fi

# Validate all files exist
for file in "$@"; do
  if [ ! -f "$file" ]; then
    echo "[claude-hook] ERROR: File does not exist: $file"
    exit 2
  fi
done

# Smart file filtering
JS_TS_FILES=()
for file in "$@"; do
  case "$file" in
    *.js|*.jsx|*.ts|*.tsx|*.mjs)
      JS_TS_FILES+=("$file")
      ;;
  esac
done

echo "[claude-hook] Processing ${#JS_TS_FILES[@]} JS/TS files"

# Lint & format only changed JS/TS files
if [ ${#JS_TS_FILES[@]} -gt 0 ] && command -v npx >/dev/null 2>&1; then
  echo "[claude-hook] Running ESLint..."
  if ! npx eslint --fix "${JS_TS_FILES[@]}"; then
    echo "[claude-hook] ERROR: ESLint failed"
    exit 2
  fi
  
  echo "[claude-hook] Running Prettier..."
  if ! npx prettier --write "${JS_TS_FILES[@]}"; then
    echo "[claude-hook] ERROR: Prettier failed"
    exit 2
  fi
fi

# TypeScript check for changed files
if [ ${#JS_TS_FILES[@]} -gt 0 ]; then
  echo "[claude-hook] Running TypeScript check..."
  if ! npx tsc --noEmit; then
    echo "[claude-hook] ERROR: TypeScript check failed"
    exit 2
  fi
fi

# Fast unit tests (only if test files changed or core logic changed)
TEST_RELEVANT=false
for file in "$@"; do
  case "$file" in
    *test*|*spec*|src/lib/*|src/components/*)
      TEST_RELEVANT=true
      break
      ;;
  esac
done

if [ "$TEST_RELEVANT" = true ]; then
  echo "[claude-hook] Running relevant unit tests..."
  if command -v vitest >/dev/null 2>&1 || npx --yes vitest -v >/dev/null 2>&1; then
    if ! npx vitest run --changed --reporter=verbose; then
      echo "[claude-hook] ERROR: Unit tests failed"
      exit 2
    fi
  else
    echo "[claude-hook] Vitest not available, skipping unit tests"
  fi
fi

echo "[claude-hook] ✅ All quality checks passed"
exit 0