# Commands Reference

## Table of Contents
- [Overview](#overview)
- [Spec-Driven Workflow Commands](#spec-driven-workflow-commands)
- [Simple Workflow Commands](#simple-workflow-commands)
- [GitHub Integration Commands](#github-integration-commands)
- [Quality & Security Commands](#quality--security-commands)
- [Risk Levels](#risk-levels)
- [Usage Examples](#usage-examples)

## Overview

Slash commands encapsulate multi-step workflows, ensuring consistency and quality across development processes. Each command has defined risk levels and approval requirements.

> **Note**: For daily operational usage and quick reference, see [CLAUDE.md](https://github.com/Shredvardson/dl-starter/blob/main/CLAUDE.md) in the repository. This page provides comprehensive command documentation for reference and AI context.

## Spec-Driven Workflow Commands

### `/specify`
**Purpose**: Create detailed specification (Full or Micro Kernel) for complex features  
**When to use**: New features, complex business logic, architectural decisions  
**Risk Level**: LOW  
**Output**: Specification document in `specs/` directory

### `/plan`  
**Purpose**: Convert specification into technical implementation plan  
**When to use**: After `/specify` - translate requirements into actionable steps  
**Risk Level**: LOW  
**Output**: Implementation plan in `plans/` directory

### `/tasks`
**Purpose**: Break implementation plan into discrete development tasks  
**When to use**: After `/plan` - create actionable task breakdown  
**Risk Level**: LOW  
**Output**: Task list in `tasks/` directory

## Simple Workflow Commands

### `/dev:plan-feature`
**Purpose**: Plan and scaffold small features or bug fixes in one step  
**When to use**: Single-component changes, small improvements, bug fixes  
**Risk Level**: MEDIUM  
**Output**: Branch creation, basic scaffolding, implementation plan

### `/test:scaffold`
**Purpose**: Generate test structure and basic test cases  
**When to use**: After planning phase, before implementation  
**Risk Level**: LOW  
**Output**: Test files with scaffolded test cases

### `/dev:implement`
**Purpose**: Execute planned implementation with TDD approach  
**When to use**: After planning and test scaffolding  
**Risk Level**: HIGH (code changes)  
**Output**: Feature implementation with tests

### `/dev:refactor-secure`
**Purpose**: Security-focused refactoring and hardening  
**When to use**: After implementation, during security review  
**Risk Level**: MEDIUM  
**Output**: Hardened code with security improvements

## GitHub Integration Commands

### `/github:create-issue`
**Purpose**: Create structured GitHub issue with proper labeling  
**When to use**: Documenting bugs, feature requests, or tasks  
**Risk Level**: LOW  
**Output**: GitHub issue with project templates

### `/github:capture-learning`
**Purpose**: Document learning spikes and research findings  
**When to use**: After research or investigation tasks  
**Risk Level**: LOW  
**Output**: Documented learning in issue or wiki

### `/github:update-wiki`
**Purpose**: Sync project state to wiki pages for LLM context  
**When to use**: After significant project changes  
**Risk Level**: LOW (requires HITL)  
**Output**: Updated wiki content

### `/git:commit`
**Purpose**: Create conventional commit with quality checks  
**When to use**: Committing completed work  
**Risk Level**: MEDIUM  
**Output**: Properly formatted commit with checks

### `/git:prepare-pr`
**Purpose**: Full PR preparation workflow with quality gates  
**When to use**: When ready to create pull request  
**Risk Level**: MEDIUM  
**Output**: PR with filled template and passing checks

## Quality & Security Commands

### `/review:ai-powered` (GitHub Action - Mention Only)
**Purpose**: AI-powered code review with inline feedback  
**When to use**: Mention `@claude /review` in PR comments  
**Risk Level**: ADVISORY  
**Output**: Inline PR comments with suggestions  
**Restrictions**: Human-only trigger, advisory feedback only

### `/security:scan` (GitHub Action - Automatic)
**Purpose**: AI-powered vulnerability detection  
**When to use**: Automatic on pull requests  
**Risk Level**: ADVISORY  
**Output**: Security findings and recommendations  
**Feature Flag**: Requires `CLAUDE_SECURITY_ENABLED=true` repo variable

### `/review:self-critique`
**Purpose**: Self-assessment during planning phase  
**When to use**: Manual command during spec development  
**Risk Level**: LOW  
**Output**: Planning validation and feedback

### `/quality:run-linter`
**Purpose**: Execute linting and formatting checks  
**When to use**: Before commits or PR creation  
**Risk Level**: LOW  
**Output**: Code quality report

## Risk Levels

### LOW Risk
- Documentation generation
- Planning and specification
- Test scaffolding
- Read-only operations

### MEDIUM Risk  
- Code refactoring
- Branch operations
- PR creation
- Configuration changes

### HIGH Risk
- Code implementation
- Database changes
- Security modifications
- Production deployments

## Usage Examples

### Complex Feature Development
```bash
# 1. Create specification
/specify
# AI creates detailed kernel for user authentication

# 2. Create implementation plan  
/plan
# AI converts kernel to technical plan

# 3. Break into tasks
/tasks  
# AI creates actionable task breakdown

# 4. Execute tasks (repeat for each task)
/dev:plan-feature
/test:scaffold
/dev:implement
```

### Simple Bug Fix
```bash
# Single command handles planning and setup
/dev:plan-feature
# AI creates branch, plans fix, scaffolds tests

# Continue with implementation
/dev:implement
/git:prepare-pr
```

### PR Review Process
```markdown
<!-- In PR comments -->
@claude /review

<!-- AI provides advisory feedback -->
<!-- Human review remains authoritative -->
```

### Quality Assurance
```bash
# Before committing
/quality:run-linter
/dev:refactor-secure

# Preparing PR
/git:commit
/git:prepare-pr
```

---
*Commands provide structured workflows while maintaining human oversight and quality standards*