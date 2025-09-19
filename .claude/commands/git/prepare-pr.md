---
# Machine-readable metadata (parsed into docs/commands/index.json)
name: "/git:prepare-pr"
version: "1.0.0"
lane: "lightweight"
tags: ["git", "pr", "workflow"]
when_to_use: >
  Create conventional commit and PR body when ready to submit changes.

arguments:
  - name: issueNumber
    type: string
    required: false
    example: "123"

inputs: []
outputs:
  - type: "artifact-links"

riskLevel: "MEDIUM"
requiresHITL: true
riskPolicyRef: "docs/llm/risk-policy.json#gitOperations"

allowed-tools:
  - "Bash(git status:*)"
  - "Bash(git add:*)"
  - "Bash(git commit:*)"
  - "Bash(gh pr create:*)"
  - "Read(.github/pull_request_template.md)"

preconditions:
  - "Changes are ready for commit"
  - "Tests pass locally"
postconditions:
  - "Conventional commit created"
  - "PR opened with proper template"

artifacts:
  produces:
    - { path: "pr-body.md", purpose: "Generated PR description" }
  updates: []

permissions:
  tools:
    - name: "git"
      ops: ["add", "commit", "push"]
    - name: "github"
      ops: ["pr-create"]

timeouts:
  softSeconds: 120
  hardSeconds: 300

idempotent: false
dryRun: true
estimatedRuntimeSec: 90
costHints: "Low I/O; git operations"

references:
  - "docs/constitution.md#git-workflow"
  - "CLAUDE.md#pr-rules"
  - ".github/pull_request_template.md"
---

**Slash Command:** `/git:prepare-pr`

**Goal:**  
Create conventional commit and PR body when ready to submit changes.

**Prompt:**  
1) Confirm lane (**lightweight/spec**) against `CLAUDE.md` decision rules.  
2) If `requiresHITL` true, ask for human confirmation citing `riskPolicyRef`.  
3) Create conventional commit and PR body:
   - Stage changes: `git add .`
   - Commit with format: `type(scope): description`
   - Generate PR body with summary, issue link, testing checklist, breaking changes
4) Reference files in `src/app/` that were modified.
5) Produce PR **artifacts** and **link** results in related Issue/PR.
6) Emit **Result**: commit created, PR URL, and next suggested command.

**Examples:**  
- `/git:prepare-pr #123` → creates commit and PR linking to issue #123
- `/git:prepare-pr --dry-run` → show planned commit and PR body only.

**Failure & Recovery:**  
- If no staged changes → suggest staging files first.
- If commit fails → check for conflicts and suggest resolution.
