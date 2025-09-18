**Slash Command:** `/specify`
**Goal:** Define pure requirements - what and why only, no technical details.
**Reference:** Must follow `docs/constitution.md` principles.

**Prompt:**
Create a feature specification focused ONLY on what users need and why.

Constraints:
- NO tech stack, APIs, or implementation details
- NO "how" - only "what" and "why"  
- Mark ALL ambiguities with [NEEDS_CLARIFICATION]
- Reference existing features and user workflows
- Focus on user value and business requirements

Format the output as:
```
# Feature Specification: [Feature Name]

## User Need
What problem does this solve? Why is it important?

## Functional Requirements  
What should the feature do? (user perspective only)

## User Experience
How should users interact with this feature?

## Success Criteria
How will we know this feature works well?

## Clarifications Needed
- [NEEDS_CLARIFICATION] Any ambiguous requirements
- [NEEDS_CLARIFICATION] Missing user scenarios  
- [NEEDS_CLARIFICATION] Unclear success metrics

## Next Steps
- Save this spec to `/specs/feature-[number]-[name].md`
- Use `/plan` to create technical implementation
- Create GitHub issue with "ai-collaboration" template
```

After generating the spec:
1. Auto-number the feature sequentially
2. Save to `/specs/` folder  
3. Create GitHub issue linking to this specification
4. Ready for `/plan` command with technical implementation