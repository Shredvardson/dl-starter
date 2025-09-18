# CLAUDE.md (Lean)

## Mission & Guardrails
See `docs/constitution.md` for complete project mission, guardrails, and AI collaboration rules.

## Development Workflows

**Default: Simple Workflow** (80% of development work)  
**Conditional: Spec-Driven Workflow** (complex/risky work only)

### 🚀 Simple Workflow (Default - Start Here)

Plan → Scaffold tests → Implement → Refactor/Secure → Prepare PR → Self-critique → Docs & Release

**Use Simple Workflow for:**

- ✅ Bug fixes and small improvements
- ✅ Single-component changes
- ✅ Refactoring existing code
- ✅ Documentation updates
- ✅ UI tweaks and styling
- ✅ Adding props to existing components
- ✅ Quick prototypes and experiments
- ✅ **Anything you can complete in 1-2 hours**

**Commands:** `/dev:plan-feature` → existing implementation commands

### 🏗️ Spec-Driven Workflow (Complex/Risky Only)

Specify → Plan → Tasks → Implement → Refactor/Secure → Prepare PR → Self-critique → Docs & Release

**Use Spec-Driven Workflow ONLY when:**
- ⚠️ **Authentication or authorization systems**
- ⚠️ **Database schema changes or new models**
- ⚠️ **Payment or billing integration** 
- ⚠️ **External API integrations**
- ⚠️ **New dependencies** (especially with security implications)
- ⚠️ **Multi-day features** with multiple components
- ⚠️ **Breaking changes** to existing APIs
- ⚠️ **Infrastructure or deployment changes**
- ⚠️ **When requirements are unclear** and need GPT-5 planning
- ⚠️ **Cross-cutting concerns** affecting multiple apps/packages

**Commands:** `/specify` → `/plan` → `/tasks` → existing implementation commands

### ❌ When NOT to Use Spec-Driven Workflow

**Don't over-engineer these common tasks:**
- Simple component creation
- Adding a new route or page
- Updating copy/text content
- CSS/styling adjustments
- Adding console logs or debug info
- Renaming variables or functions
- Adding TypeScript types for existing data
- Documentation updates
- Test file creation for existing features

### 🎯 Decision Framework

**Ask yourself:** 
1. **Risk**: Could this break authentication, payments, or data?
2. **Scope**: Will this touch 3+ files or take more than 2 hours?  
3. **Clarity**: Do I fully understand what needs to be built?
4. **Dependencies**: Am I adding new packages or external services?

**If 2+ answers are "yes" → Spec-Driven. Otherwise → Simple.**

**Reference**: All workflows must follow `docs/constitution.md` architectural decisions.

## Commands Index

### Spec-Driven Development (Complex Features)
- /specify → .claude/commands/spec/specify.md
- /plan → .claude/commands/spec/plan.md  
- /tasks → .claude/commands/spec/tasks.md

### Simple Development (Small Changes)
- /dev:init-new-app → .claude/commands/dev/init-new-app.md
- /dev:plan-feature → .claude/commands/dev/plan-feature.md
- /test:scaffold → .claude/commands/test/scaffold.md
- /dev:implement → .claude/commands/dev/implement.md
- /dev:refactor-secure → .claude/commands/dev/refactor-secure.md

### GitHub Integration
- /github:create-issue → .claude/commands/github/create-issue.md
- /github:capture-learning → .claude/commands/github/capture-learning.md
- /github:update-wiki → .claude/commands/github/update-wiki.md
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
- **Human-only**: Bots cannot trigger other bots
- **Feature flag**: Requires `CLAUDE_ENABLED=true` repo variable
- Pushes to `bots/claude/*` branches only  
- **Non-editable zones**: `.github/workflows/**`, `scripts/release/**`, `.env*`, `**/.env*`
- **Allowed paths**: `apps/`, `packages/`, `docs/**`
- **Quality gates**: All bot PRs must pass doctor, tsc, e2e, and human review
- **Timeout**: 10 minutes max per review to control costs
- **Case handling**: Accepts `@claude` or `@Claude` with `/review` or `/Review`

### /security:scan (GitHub Action - Advisory)
**Trigger**: Automatic on `pull_request` events  
**Purpose**: AI-powered vulnerability detection with semantic analysis  
**Scope**: Advisory-first (`fail_on_findings: false`), CodeQL remains blocker  
**Output**: Inline comments + aggregated in doctor report
**Feature flag**: Requires `CLAUDE_SECURITY_ENABLED=true` repo variable
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

### Operational Controls
**Feature Flags** (Repository Variables):
- `CLAUDE_ENABLED=true` - Enable AI-powered PR reviews
- `CLAUDE_SECURITY_ENABLED=true` - Enable security scanning

**Safety Mechanisms**:
- Human-only triggers (bots cannot activate bots)
- Branch isolation (`bots/claude/*` only)
- Path restrictions (no access to workflows, env files)
- Timeout limits (10 minutes per job)
- Concurrency controls (cancel duplicate runs)

**Governance Controls (NEW)**:
- **Author Association**: Only OWNER/MEMBER/COLLABORATOR can trigger `@claude` commands
- **Promote Labels**: Bot PRs require maintainer-added `promote` label before merge
- **Label Hygiene**: AI workflows apply `ai-review:advisory` / `ai-security:advisory` labels
- **Doctor Enforcement**: Starter doctor warns if AI labels missing when artifacts present

**Quality Integration**:
- All AI outputs aggregate into single doctor report
- Existing quality gates remain authoritative  
- Advisory-first approach with measurable false-positive tracking

## References
- [CONTRIBUTING.md](CONTRIBUTING.md) · [RELEASING.md](RELEASING.md) · [SECURITY.md](SECURITY.md)
- [Auth Recipe](docs/recipes/auth.md) · [Database Recipe](docs/recipes/db.md) · [Environment Setup](docs/recipes/env-setup.md) · [Stripe Recipe](docs/recipes/stripe.md) · [ShadCN Recipe](docs/recipes/shadcn.md)

## Testing Notes
This implementation has been tested with GPT-5's 3-part smoke test sequence for operational validation.