# Workflow Security & Reliability Guide

This document explains how we write GitHub Actions safely. The rules below are **enforced in our current workflows** and should be followed for any new jobs.

## 🔒 Security Rules (Implemented & Enforced)

### 1. Safe Output Handling
**Rule:** Never use heredocs to `$GITHUB_OUTPUT` - they can fail if content contains delimiter-like lines.

✅ **Implemented:** PR Autofill workflow uses `actions/github-script@v7`

```yaml
- name: Load template
  id: tpl  
  uses: actions/github-script@v7
  with:
    result-encoding: string
    script: |
      const fs = require('fs');
      return fs.readFileSync('.github/pull_request_template.md', 'utf8');
```

### 2. pull_request_target Security  
**Rule:** Always checkout trusted base ref, never execute fork code.

✅ **Implemented:** All `pull_request_target` workflows checkout base SHA only

```yaml
- uses: actions/checkout@v4
  with:
    ref: ${{ github.event.pull_request.base.sha }}
    fetch-depth: 1
    persist-credentials: false  # Security hardening
```

### 3. Event Guards for PR Logic
**Rule:** Don't run PR-specific checks on push events.

✅ **Implemented:** PR Autofill and CI workflows include proper guards

```yaml
if: ${{ github.event_name == 'pull_request' || github.event_name == 'pull_request_target' }}
```

### 4. Literal Heredocs for File Writes
**Rule:** Use quoted heredocs to prevent variable expansion when writing files.

✅ **Implemented:** CI doctor reports use `<<'EOF'` syntax

```yaml
- name: Build doctor report
  run: |
    cat <<'EOF' > artifacts/doctor-report.md
    # CI Doctor Report  
    EOF
```

### 5. Minimal Permissions
**Rule:** Grant only necessary permissions to workflows.

✅ **Implemented:** All workflows use minimal permission sets

```yaml
permissions:
  contents: read
  pull-requests: write
```

## 📋 Policy Guidelines (Optional)

### Fork Restrictions
For sensitive jobs, optionally restrict to same repository:
```yaml
if: ${{ github.event.pull_request.head.repo.full_name == github.repository }}
```

### Workflow Protection
Consider adding CODEOWNERS protection for workflow files:
```
.github/workflows/* @maintainers-team
```

## ✅ Implementation Status

| Security Rule | Status | Location |
|---------------|--------|----------|
| Safe outputs | ✅ Implemented | `.github/workflows/pr-autofill.yml` |
| Base ref checkout | ✅ Implemented | All `pull_request_target` workflows |  
| Event guards | ✅ Implemented | `.github/workflows/ci.yml`, `.github/workflows/pr-autofill.yml` |
| Literal heredocs | ✅ Implemented | `.github/workflows/ci.yml` |
| Minimal permissions | ✅ Implemented | All workflows |

## 🚀 For New Workflows

When creating new GitHub Actions:

1. **Copy permission structure** from existing workflows
2. **Use `actions/github-script@v7`** for complex outputs  
3. **Add event guards** for PR-specific logic
4. **Checkout base SHA only** for `pull_request_target`
5. **Test locally** with act or similar tools

---
> **Note:** These practices were established based on security recommendations and are actively enforced in the current CI/CD pipeline.