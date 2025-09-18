# Project Constitution

## Mission & Philosophy
**Optimize for: fast, correct TDD; secure defaults; zero-drift docs.**

This constitution governs all AI-assisted development in this project. All Claude Code commands, GitHub workflows, and specifications must align with these principles.

## Core Guardrails
- **No secrets** in prompts/code
- **TDD first**: tests before implementation  
- **Conventional commits** only
- **Least-deps**: justify new packages
- **Security-first**: defensive patterns by default

## Technical Architecture Decisions

### Tech Stack (Locked)
- **Frontend**: Next.js 15 with App Router
- **Language**: TypeScript with strict configuration  
- **Styling**: Tailwind CSS with design tokens only
- **Testing**: Playwright for e2e, Jest for unit tests
- **Quality**: ESLint, TypeScript, automated review
- **Deployment**: Vercel with GitHub Actions CI/CD

### Development Constraints
- **File Structure**: Apps in `apps/`, packages in `packages/`, shared utilities in `@/lib`
- **Environment**: All config via `@/lib/env.ts` pattern
- **UI Patterns**: No hardcoded hex colors, tokenized Tailwind only
- **Dependencies**: Minimal additions, justify in PRs
- **Testing Strategy**: Contract → integration → e2e → unit test order

### AI Collaboration Rules
- **Specification-Driven**: Use `/specify` → `/plan` → `/tasks` workflow for complex features
- **Issue-Based Planning**: All features start as GitHub issues with outcomes captured
- **Learning Capture**: Document patterns and decisions for reuse
- **Quality Gates**: All code must pass doctor, lint, typecheck, e2e tests
- **Security Review**: Use `/dev:refactor-secure` for sensitive changes

## Workflow Integration

### Planning Phase Commands
1. **`/specify`**: Pure requirements (what/why only, no tech details)
2. **`/plan`**: Technical implementation within constitutional constraints  
3. **`/tasks`**: Actionable breakdown with testing strategy

### Implementation Phase  
4. **`/test:scaffold`**: Create tests following constitution order
5. **`/dev:implement`**: Build within architectural constraints
6. **`/dev:refactor-secure`**: Apply security-first improvements

### Quality & Release Phase
7. **`/quality:run-linter`**: Enforce code standards
8. **`/git:commit`**: Conventional commits with proper messaging
9. **`/git:prepare-pr`**: Documentation and verification steps

## Artifact Management
- **Specifications**: Store in `/specs` folder with feature numbering
- **Technical Plans**: Store in `/plans` folder linked to specifications  
- **Task Breakdowns**: Store in `/tasks` folder with implementation tracking
- **Cross-References**: All artifacts link to related GitHub issues

## AI Behavior Constraints
- **Clarification**: Mark ambiguities with `[NEEDS_CLARIFICATION]` 
- **File Order**: Always create contracts, then tests, then implementation
- **Documentation**: Update `docs/llm/context-map.json` for new paths
- **Patterns**: Reference existing code conventions and utilities
- **Security**: Never expose secrets, always validate inputs

## Tool Permissions & Safety

### MCP Tool Risk Matrix

| Tool | Allowed Operations | Risk Level | HITL Required | Justification |
|------|-------------------|------------|---------------|---------------|
| **File System Tools** | | | | |
| Read | Read any project file | LOW | No | Information gathering |
| Edit | Modify existing files | MEDIUM | No | Controlled changes to known files |
| Write | Create new files | MEDIUM | Yes | New files require human approval |
| MultiEdit | Batch file modifications | HIGH | Yes | Multiple simultaneous changes |
| **Execution Tools** | | | | |
| Bash | Run shell commands | HIGH | Context | Dangerous commands require confirmation |
| mcp__ide__executeCode | Execute code in kernel | HIGH | Yes | Code execution always requires approval |
| **External Services** | | | | |
| WebFetch | Fetch external URLs | MEDIUM | No | Read-only web access |
| WebSearch | Search the internet | LOW | No | Information gathering |
| GitHub MCP | Repository operations | MEDIUM | Context | Write operations need confirmation |
| **AI/LLM Tools** | | | | |
| Task (Agent) | Spawn sub-agents | HIGH | Yes | Sub-agents inherit permissions |

### Human-in-the-Loop (HITL) Gates

**Always Require Confirmation:**
- Creating new files with Write tool
- Executing code with mcp__ide__executeCode  
- Spawning Task agents for complex operations
- Batch modifications with MultiEdit
- Any GitHub operations that modify repository state

**Context-Dependent Confirmation:**
- Bash commands involving system changes, installations, or deletions
- File operations outside of standard development paths
- API calls to external services beyond reading

**Auto-Approved (No HITL):**
- Reading files within project directory
- Web searches and information gathering
- Editing existing files within established patterns
- Standard development commands (npm, git status, etc.)

### Command Risk Levels

Commands inherit risk levels based on their operations:

- **HIGH RISK**: `/tasks` (creates multiple files), `/dev:implement` (writes code)
- **MEDIUM RISK**: `/plan` (creates files), `/test:scaffold` (creates tests)  
- **LOW RISK**: `/specify` (planning only), `/quality:run-linter` (read-only checks)

**Risk Escalation Rules:**
1. Any command creating 3+ files → HIGH risk → HITL required
2. Any command touching security-sensitive paths → HIGH risk → HITL required
3. Any command with external dependencies → MEDIUM risk → Context review

---
*This constitution is the source of truth for all AI agents working on this project.*

---
*This is a read-only copy. Source of truth: [`docs/constitution.md`](https://github.com/dissonance-labs/dl-starter-new/blob/main/docs/constitution.md)*
*Last updated: 2025-09-18*