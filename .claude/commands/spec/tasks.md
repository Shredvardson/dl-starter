**Slash Command:** `/tasks`
**Goal:** Break down technical plan into actionable implementation tasks with TDD focus.
**Reference:** Must follow plan from `/plan` command and `docs/constitution.md` workflow.

**Prompt:**
Create an actionable task breakdown for implementation.

Pre-requisites:
- Must have existing plan from `/plan` command  
- Reference the technical plan in `/plans/feature-[number]-[name].md`
- Follow TDD workflow: tests before implementation

Constitutional Order (enforced):
1. Contracts/Interfaces first
2. Test files (integration → e2e → unit)
3. Implementation files
4. Documentation updates

Format the output as:
```
# Implementation Tasks: [Feature Name]

## Task Breakdown

### Phase 1: Contracts & Interfaces
- [ ] **Task 1.1**: Define TypeScript interfaces
  - Files: `src/types/[feature].ts`
  - Acceptance: Type contracts for all data structures
  
- [ ] **Task 1.2**: Create API contracts (if needed)
  - Files: `src/api/[endpoints].ts`
  - Acceptance: Request/response types defined

### Phase 2: Test Foundation  
- [ ] **Task 2.1**: Integration test setup
  - Files: `tests/integration/[feature].test.ts`
  - Acceptance: Test infrastructure and happy path

- [ ] **Task 2.2**: E2E test scenarios
  - Files: `tests/e2e/[feature].spec.ts`  
  - Acceptance: User workflow testing

- [ ] **Task 2.3**: Unit test scaffolds
  - Files: `tests/unit/[components].test.ts`
  - Acceptance: Test files created, ready for TDD

### Phase 3: Implementation
- [ ] **Task 3.1**: Core components  
  - Files: `src/components/[feature]/`
  - Acceptance: Components pass integration tests

- [ ] **Task 3.2**: Business logic
  - Files: `src/lib/[feature]/`
  - Acceptance: Logic passes unit tests

- [ ] **Task 3.3**: API integration (if needed)
  - Files: `src/api/`, `src/hooks/`
  - Acceptance: Data flow works end-to-end

### Phase 4: Integration & Polish
- [ ] **Task 4.1**: UI integration
  - Files: Page and layout updates
  - Acceptance: Feature accessible in UI

- [ ] **Task 4.2**: Error handling & validation
  - Files: Error boundaries, form validation
  - Acceptance: Graceful error states

### Phase 5: Documentation & Release
- [ ] **Task 5.1**: Update documentation
  - Files: `docs/`, wiki pages, `context-map.json`
  - Acceptance: Documentation current

- [ ] **Task 5.2**: Security review
  - Command: `/dev:refactor-secure`
  - Acceptance: Security patterns validated

## Implementation Commands
1. Use `/test:scaffold` for each test file
2. Use `/dev:implement` for each implementation task  
3. Use `/quality:run-linter` after each phase
4. Use `/git:commit` with conventional commit messages

## Branch Strategy
- Branch name: `feature/[number]-[feature-name]`
- Commit per task completion
- PR when all tasks complete

## Next Steps
- Save this breakdown to `/tasks/feature-[number]-[name].md`
- Update GitHub issue with task checklist
- Begin implementation with Phase 1, Task 1.1
```

After generating tasks:
1. Link to specification and plan
2. Save to `/tasks/` folder  
3. Update GitHub issue with task checklist
4. Create feature branch
5. Ready for implementation using existing commands