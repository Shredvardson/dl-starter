---
id: "002"
slug: "test-spec-lite-workflow"
scope: ["docs", "scripts/ci"]
owner: "Jonte"
summary: "Validate Spec-Lite adoption by testing CI gate, commands, and workflow end-to-end."
non_goals: ["production deployment", "performance optimization"]
success_metrics:
  - "CI spec gate blocks invalid PRs"
  - "All three slash commands work correctly"
  - "Workflow completes in <5 minutes"
risks: ["CI configuration errors", "bash script edge cases"]
entities: ["Spec", "PR", "CI Job"]
touchpoints: ["scripts/ci/spec_gate.sh", ".github/workflows/ci.yml", ".claude/commands/*"]
---

## Intent
Verify the Spec-Lite system works end-to-end: create spec → branch → implement → test CI gate → validate workflow.

## Plan
Test flow (inline):
1. Create test PR without `Spec-ID` → should fail
2. Create test PR with `Spec-ID: 999` (missing spec) → should fail  
3. Create test PR with `Spec-ID: 002` + code changes but no test changes → should fail
4. Create valid PR with `Spec-ID: 002` + test changes → should pass
5. Test all three commands: `/specify`, `/plan`, `/tasks`

No external dependencies. Uses existing CI infrastructure.

## Dev Tasks
- Create test branch `feat/002-test-spec-lite-workflow`
- Make small code change in `apps/web/src/`
- Add corresponding test change
- Open PR with proper `Spec-ID: 002` format
- Verify CI spec-gate job runs and passes
- Document any issues found

## Acceptance Tests
- Invalid PR configurations blocked by CI
- Valid PR with spec and tests passes CI
- Slash commands create/update specs correctly
- Word count enforcement works (test with >900 word spec)

## Notes / Links
Reference: docs/constitution.md for all rules being tested.