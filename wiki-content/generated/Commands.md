# Command Reference

**Quick reference for AI-assisted development commands.**

## Decision Framework

- ⚠️ Risk: authentication/payments/data
- ⚠️ Scope: 3+ files or 2+ hours
- ⚠️ Clarity: requirements unclear
- ⚠️ Dependencies: new packages/services
**→ Use Spec-Driven Workflow** (`/specify` → `/plan` → `/tasks`)

- ✅ Single component changes
- ✅ UI tweaks and styling
- ✅ Bug fixes
- ✅ Documentation updates
- ✅ Anything completable in 1-2 hours
**→ Use Simple Workflow** (`/dev:plan-feature`)

## Commands by Category

### Documentation

#### `generate`
**Purpose:** No description available
**When:** Setting up tests and TDD workflows
**Example:** Standard development workflow


### Git Workflow

#### `/git:commit`
**Purpose:** Generate a Conventional Commit message for staged changes.
**When:** Code quality and security improvements
**Example:** Create conventional commit for completed feature

#### `prepare-pr`
**Purpose:** No description available
**When:** GitHub workflow and project management
**Example:** Standard development workflow

#### `tag-release`
**Purpose:** No description available
**When:** General development tasks
**Example:** Standard development workflow

#### `workflow`
**Purpose:** No description available
**When:** Setting up tests and TDD workflows
**Example:** Standard development workflow


### GitHub Integration

#### `/github:capture-learning`
**Purpose:** Update an existing issue with implementation outcomes and learnings.
**When:** GitHub workflow and project management
**Example:** Create GitHub issue with proper templates

#### `/github:create-issue`
**Purpose:** Create a GitHub issue from our current planning discussion with proper template and context linking.
**When:** Code quality and security improvements
**Example:** Create GitHub issue with proper templates

#### `/github:update-wiki`
**Purpose:** Sync current project state to wiki pages for GPT-5 context.
**When:** GitHub workflow and project management
**Example:** Create GitHub issue with proper templates


### Quality Assurance

#### `run-linter`
**Purpose:** No description available
**When:** GitHub workflow and project management
**Example:** Standard development workflow


### Review & Quality

#### `self-critique`
**Purpose:** No description available
**When:** Setting up tests and TDD workflows
**Example:** Standard development workflow


### Simple Development

#### `/dev:plan-feature`
**Purpose:** Plan a small, safe feature with clear acceptance criteria.
**When:** Small changes and quick tasks
**Example:** Create technical plan for auth implementation

#### `implement`
**Purpose:** No description available
**When:** Setting up tests and TDD workflows
**Example:** Build feature following established plan

#### `init-new-app`
**Purpose:** No description available
**When:** General development tasks
**Example:** Standard development workflow

#### `refactor-secure`
**Purpose:** No description available
**When:** Setting up tests and TDD workflows
**Example:** Add security improvements to API endpoints


### Spec-Driven Development

#### `/plan`
**Purpose:** Create technical implementation plan within constitutional constraints.
**When:** Complex features requiring structured approach
**Example:** Create technical plan for auth implementation

#### `/specify`
**Purpose:** Define pure requirements - what and why only, no technical details.
**When:** GitHub workflow and project management
**Example:** Define requirements for user authentication system

#### `/tasks`
**Purpose:** Break down technical plan into actionable implementation tasks with TDD focus.
**When:** Code quality and security improvements
**Example:** Break down auth feature into TDD tasks


### Testing

#### `scaffold`
**Purpose:** No description available
**When:** Setting up tests and TDD workflows
**Example:** Standard development workflow


## Routing Rules

**Complex Features:** authentication, database, payments, api, infra
**Simple Tasks:** styling, copy, props, refactor, docs
**Security Sensitive:** auth, payments, user-data, api-keys, validation

---
*Auto-generated from [`docs/commands/index.json`](https://github.com/dissonance-labs/dl-starter-new/blob/main/docs/commands/index.json)*
*Last updated: 2025-09-18*