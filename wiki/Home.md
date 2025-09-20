# Dissonance Labs Starter

## Table of Contents
- [Mission & Philosophy](#mission--philosophy)
- [Two-Lane Development Model](#two-lane-development-model)
- [Guardrails](#guardrails)
- [Glossary](#glossary)
- [Quick Links](#quick-links)

## Mission & Philosophy

**Optimize for**: Fast, correct TDD; secure defaults; zero-drift docs.

This starter implements AI-assisted development with **dual lanes** for different complexity levels, ensuring quality while maintaining velocity.

## Two-Lane Development Model

### Planning Lane vs Execution Lane

**Simple Workflow** (Execution Lane)
- Small changes, bug fixes, refactoring
- Single slash command: `/dev:plan-feature`
- Direct implementation with quality gates

**Spec-Driven Workflow** (Planning Lane)  
- Complex features, new business logic, architectural decisions
- Multi-step: `/specify` → `/plan` → `/tasks` → implement
- Structured planning with GPT-5 collaboration

### When to Use Which

**Use Simple** (`/dev:plan-feature`) for:
- Bug fixes and small improvements
- Single-component changes  
- Documentation updates
- Quick prototypes

**Use Spec-Driven** (`/specify`) for:
- New features with multiple components
- Complex user workflows
- Anything requiring architectural decisions
- When collaborating with GPT-5 on planning

## Guardrails

### Branch Isolation
- All bot work happens on `bots/claude/*` branches
- Human-only triggers (bots cannot activate bots)
- Path restrictions: no access to `.github/workflows/**`, `.env*`

### Promote Label System
- Bot PRs require maintainer-added `promote` label before merge
- Advisory-first approach with measurable false-positive tracking
- Human review remains authoritative

### AI Lane Control
- **Instant disable**: Set `CLAUDE_ENABLED=false` to disable AI-powered PR reviews
- **Security disable**: Set `CLAUDE_SECURITY_ENABLED=false` to disable AI security scanning
- **Emergency stop**: Both flags provide immediate control over AI automation

### Quality Gates
- **TDD first**: tests before implementation
- **Conventional commits** only
- **Least-deps**: justify new packages
- **No secrets** in prompts/code

## Glossary

**Kernel**: Specification document (Full or Micro template) that defines requirements and acceptance criteria

**Doctor**: Quality pipeline script (`npm run doctor`) that checks project health, links, and compliance

**Slash Command**: Structured workflow command (e.g., `/dev:plan-feature`, `/review:ai-powered`) that encapsulates multi-step processes

**Bot Branch**: Isolated branch (`bots/claude/*`) where AI agents perform work safely

**Advisory Review**: AI-powered feedback that provides suggestions but doesn't block merges

**Promote Label**: Manual label (`promote`) required on bot PRs before merge, ensuring human oversight

## Quick Links

- [Spec System Templates & Usage](Spec-System.md)
- [Complete Commands Reference](Commands.md)  
- [Quality Gates & Pipeline](Quality-Gates.md)
- [Architecture & Stack Overview](Architecture.md)
- [Getting Started Guide](Getting-Started.md)
- [AI Collaboration Best Practices](AI-Collaboration.md)

---
*This wiki serves as LLM context and human reference. For operational commands and daily workflow, see [CLAUDE.md](https://github.com/Shredvardson/dl-starter/blob/main/CLAUDE.md) in the repository.*