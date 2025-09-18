# DL Starter - Project Overview

**A lightweight, LLM-friendly Next.js starter with tokens, adapters, and hooks for solo developers building with AI assistance.**

## Quick Context for AI Collaborators

### Project Mission
**Optimize for: fast, correct TDD; secure defaults; zero-drift docs.**

This constitution governs all AI-assisted development in this project. All Claude Code commands, GitHub workflows, and specifications must align with these principles.

**Full Details:** [`docs/constitution.md`](https://github.com/dissonance-labs/dl-starter-new/blob/main/docs/constitution.md)

### Current Architecture- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with design tokens
- **State Management**: React hooks and context patterns  
- **Quality**: ESLint, TypeScript, automated testing
- **AI Integration**: Claude Code workflows, GitHub automation

### Key Directories
- `apps/web/` - Main Next.js application
- `packages/` - Shared packages and utilities
- `.claude/commands/` - AI workflow commands
- `.github/workflows/` - CI/CD and automation
- `docs/` - Technical specifications and guides

### Key Directories
- `apps/web/` - Main Next.js application
- `packages/` - Shared packages and utilities
- `.claude/commands/` - AI workflow commands
- `.github/workflows/` - CI/CD and automation
- `docs/` - Technical specifications and guides

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

## For GPT-5 Planning Sessions
- Check [[Architecture-Overview]] for system design
- Review [[Data-Model]] for database schema
- See [[Current-Features]] for implemented functionality
- Reference [[Design-System]] for UI patterns

**Command Reference:** [`docs/commands/index.json`](https://github.com/dissonance-labs/dl-starter-new/blob/main/docs/commands/index.json)

---
*This wiki is auto-generated from repository sources. Last updated: 2025-09-18*
*Source files: docs/constitution.md, CLAUDE.md*