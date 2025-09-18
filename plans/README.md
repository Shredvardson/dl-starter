# Technical Plans

This folder contains technical implementation plans created using the `/plan` command.

## File Naming Convention
- `feature-[number]-[name].md` - Matches corresponding specification
- Example: `feature-001-user-authentication.md`

## Purpose
- **Technical architecture**: How to implement within constitutional constraints
- **Implementation strategy**: Component design, state management, API design
- **Testing approach**: TDD strategy following constitution order
- **Security considerations**: Input validation, auth, data protection
- **Risk assessment**: Technical risks and mitigation strategies

## Constitutional Constraints
All plans must align with:
- Next.js 15 + TypeScript + Tailwind CSS stack
- Security-first development patterns
- Minimal dependencies philosophy
- TDD approach: tests before implementation

## Workflow Integration
1. Created via `/plan` command referencing existing specification
2. Links to task breakdown in `../tasks/` folder
3. Updates GitHub issue with technical context
4. Guides implementation phase execution

See `docs/constitution.md` for architectural decisions and constraints.