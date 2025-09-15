# CLAUDE.md (Lean)

## Mission
Optimize for: fast, correct TDD; secure defaults; zero-drift docs.

## Guardrails
- **No secrets** in prompts/code.
- **TDD first**: tests before impl.
- **Conventional commits** only.
- **Least-deps**; justify new packages.

## Runbook (7 steps)
Plan → Scaffold tests → Implement → Refactor/Secure → Prepare PR → Self-critique → Docs & Release

## Commands Index
- /dev:init-new-app → .claude/commands/dev/init-new-app.md
- /dev:plan-feature → .claude/commands/dev/plan-feature.md
- /test:scaffold → .claude/commands/test/scaffold.md
- /dev:implement → .claude/commands/dev/implement.md
- /dev:refactor-secure → .claude/commands/dev/refactor-secure.md
- /quality:run-linter → .claude/commands/quality/run-linter.md
- /git:commit → .claude/commands/git/commit.md
- /git:workflow → .claude/commands/git/workflow.md
- /git:prepare-pr → .claude/commands/git/prepare-pr.md
- /review:self-critique → .claude/commands/review/self-critique.md
- /review:ai-powered → AI-powered PR review via GitHub Action (mention-only)
- /security:scan → Advisory security review for vulnerabilities
- /docs:generate → .claude/commands/docs/generate.md
- /git:tag-release → .claude/commands/git/tag-release.md

## Pull Request Rules (MUST DO)
When you open a PR:
- Use a **specific, action-oriented title** (e.g., `feat: add user auth with OAuth2`, `fix: resolve memory leak in cache`)
- Set the PR body from `.github/pull_request_template.md` and **fill sections**:
  - Summary (1–3 sentences), Scope, Verification (paste command results), Breaking changes/Migration
- If you only push commits (no PR), **create** the PR via CLI:
  ```bash
  gh pr create --title "feat: descriptive title" --body-file .github/pull_request_template.md
  ```
- Never leave placeholder text in a PR

## Security & Review Commands

### /review:ai-powered (GitHub Action - Mention Only)
**Trigger**: `@claude /review` in PR comments  
**Purpose**: AI-powered code review with inline feedback  
**Scope**: Advisory comments only, human review remains authoritative  
**Output**: Appended to doctor report artifacts as "AI Review (Advisory)" section  

**Usage Rules**:
- Mention-only trigger (never automatic)
- Pushes to `bots/claude/*` branches only  
- **Non-editable zones**: `.github/workflows/**`, `scripts/release/**`, `.env*`, `**/.env*`
- **Allowed paths**: `apps/`, `packages/`, `docs/**`
- **Quality gates**: All bot PRs must pass doctor, tsc, e2e, and human review
- **Timeout**: 10 minutes max per review to control costs
- **Case handling**: Accepts `/review`, `/Review`, or `/REVIEW`

### /security:scan (GitHub Action - Advisory)
**Trigger**: Automatic on `pull_request` events  
**Purpose**: AI-powered vulnerability detection with semantic analysis  
**Scope**: Advisory-first (`fail_on_findings: false`), CodeQL remains blocker  
**Output**: Inline comments + aggregated in doctor report
**Timeout**: 10 minutes max per scan
**Permissions**: Read-only, comment-only (cannot push code)

**Security Focus Areas**:
- Input validation vulnerabilities
- Authentication/authorization issues  
- Crypto and secrets management
- Injection and code execution risks
- Data exposure concerns

### /review:self-critique (Manual GPT-5 Lane)
**Trigger**: Manual command during planning phase  
**Purpose**: Self-assessment during spec development  
**Scope**: Planning contract validation, not PR automation  
**Integration**: Works with Spec Kernel during design phase

### Command Boundaries
- **AI-Powered PR Review** (`/review:ai-powered`): GitHub automation, advisory feedback
- **Self-Critique** (`/review:self-critique`): Manual planning validation  
- **Security Scan** (`/security:scan`): Automated vulnerability detection
- **Refactor-Secure** (`/dev:refactor-secure`): Manual security refactoring

## References
- CONTRIBUTING.md · RELEASING.md · SECURITY.md
- docs/recipes/{auth,db,env-setup,stripe,shadcn}.md