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
- /git:prepare-pr → .claude/commands/git/prepare-pr.md
- /review:self-critique → .claude/commands/review/self-critique.md
- /docs:generate → .claude/commands/docs/generate.md
- /git:tag-release → .claude/commands/git/tag-release.md

## References
- CONTRIBUTING.md · RELEASING.md · SECURITY.md
- docs/recipes/{auth,db,env-setup,stripe,shadcn}.md