**Slash Command:** `/plan`
**Goal:** Create technical implementation plan within constitutional constraints.
**Reference:** Must align with `docs/constitution.md` and existing specification.

**Prompt:**
Create a detailed technical plan for the specified feature.

Pre-requisites:
- Must have existing specification from `/specify` command
- Reference the feature spec in `/specs/feature-[number]-[name].md`
- Follow all architectural decisions in `docs/constitution.md`

Technical Constraints (from Constitution):
- Next.js 15 with TypeScript strict mode
- Tailwind CSS with design tokens only
- Environment config via `@/lib/env.ts`
- TDD approach: tests before implementation
- Security-first patterns
- Minimal dependencies (justify additions)

Format the output as:
```
# Technical Plan: [Feature Name]

## Architecture Decision  
How does this fit within our Next.js/TypeScript/Tailwind stack?

## File Changes Required
- Files to modify: `src/**` paths only
- New files needed: specify exact paths
- Database changes: schema updates if needed

## Implementation Strategy
- Component structure and patterns
- State management approach  
- API design (if needed)
- Integration points with existing code

## Testing Strategy
Following TDD order from constitution:
1. Contract tests: Define interfaces
2. Integration tests: Component interactions  
3. E2E tests: User workflows
4. Unit tests: Business logic

## Security Considerations
- Input validation requirements
- Authentication/authorization needs
- Data protection patterns
- Rate limiting considerations

## Dependencies
- Existing packages to leverage
- New packages needed (with justification)
- Version compatibility checks

## Risks & Mitigation
- Technical risks and solutions
- Breaking change potential
- Performance implications

## Next Steps
- Save this plan to `/plans/feature-[number]-[name].md`  
- Use `/tasks` to create actionable breakdown
- Update GitHub issue with technical context
```

After generating the plan:
1. Link to corresponding specification
2. Save to `/plans/` folder
3. Update GitHub issue with technical details
4. Ready for `/tasks` command for implementation breakdown