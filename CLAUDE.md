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

## References
- CONTRIBUTING.md · RELEASING.md · SECURITY.md
- docs/recipes/{auth,db,env-setup,stripe,shadcn}.md