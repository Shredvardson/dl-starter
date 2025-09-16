# Workflow Security Improvements (GPT-5 Recommendations)

This document outlines security improvements that need to be applied by maintainers to workflow files in `.github/workflows/**`.

## 1. Replace Heredocs to $GITHUB_OUTPUT with GitHub Script

### Problem
Heredocs to `$GITHUB_OUTPUT` can fail if content contains delimiter-like lines.

### Solution
Replace with `actions/github-script@v7` for safe output handling:

```yaml
# BEFORE (problematic)
- name: Load template
  id: tpl
  run: |
    echo "TEMPLATE<<'EOF'" >> $GITHUB_OUTPUT
    cat .github/pull_request_template.md >> $GITHUB_OUTPUT
    echo "EOF" >> $GITHUB_OUTPUT

# AFTER (safe)
- name: Load template
  id: tpl
  uses: actions/github-script@v7
  with:
    result-encoding: string
    script: |
      const fs = require('fs');
      return fs.readFileSync('.github/pull_request_template.md', 'utf8');
```

## 2. pull_request_target Security

### Requirement
Always checkout trusted base ref, never fork code:

```yaml
on:
  pull_request_target:
    types: [opened, synchronize, reopened]

permissions:
  contents: read
  pull-requests: write

jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          # Base SHA is trusted, not attacker-controlled fork
          ref: ${{ github.event.pull_request.base.sha }}
          persist-credentials: false
          fetch-depth: 1
```

## 3. Guard Placeholder Detection

Add event guards for PR-specific checks:

```yaml
- name: Check for unreplaced placeholders
  if: ${{ github.event_name == 'pull_request' || github.event_name == 'pull_request_target' }}
  shell: bash
  run: |
    set -euo pipefail
    if git grep -nE '<<PLACEHOLDER_[A-Z0-9_]+>>' -- ':!**/*.md'; then
      echo "Found unreplaced placeholders. Please resolve before merging."
      exit 1
    fi
```

## 4. Literal Heredocs for Doctor Reports

Use quoted heredocs to prevent variable expansion:

```yaml
- name: Build doctor report
  run: |
    cat <<'EOF' > artifacts/doctor-report.md
    # CI Doctor Report
    - Build: OK
    - Tests: OK
    - Notes: No secrets detected
    EOF
```

## 5. Fork Restrictions (Optional)

For `pull_request` events, optionally restrict to same repo:

```yaml
if: ${{ github.event.pull_request.head.repo.full_name == github.repository }}
```

## 6. Minimal Permissions

Always use minimal permissions:

```yaml
permissions:
  contents: read
  pull-requests: write
```

## Files Requiring Updates

1. `.github/workflows/ci.yml` - Heredoc safety, guards, minimal permissions
2. `.github/workflows/pr-autofill.yml` - GitHub Script approach (already applied in PR #31)
3. `.github/workflows/security-review.yml` - Minimal permissions, base ref checkout
4. `.github/workflows/claude-review.yml` - Event guards, safe outputs

## Implementation Priority

1. **High**: Replace heredocs with GitHub Script
2. **High**: Fix `pull_request_target` base ref checkout  
3. **Medium**: Add event guards for PR-specific logic
4. **Low**: Optional fork restrictions

---
> Note: Generated from internal security recommendations.
