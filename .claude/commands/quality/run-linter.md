---
# Machine-readable metadata (parsed into docs/commands/index.json)
name: "/quality:run-linter"
version: "1.0.0"
lane: "lightweight"
tags: ["quality", "linting", "formatting"]
when_to_use: >
  Execute linting and fix all quality issues before commits.

arguments: []

inputs: []
outputs:
  - type: "report"

riskLevel: "LOW"
requiresHITL: false
riskPolicyRef: "docs/llm/risk-policy.json#commandDefaults"

allowed-tools:
  - "Bash(pnpm lint:*)"
  - "Bash(pnpm format:*)"
  - "Bash(pnpm typecheck:*)"
  - "Read(eslint.config.mjs|.eslintrc.*)"
  - "Read(.prettierrc|.prettierrc.*|prettier.config.*)"

preconditions:
  - "Code changes exist to be linted"
  - "ESLint and Prettier are configured"
postconditions:
  - "All linting errors resolved"
  - "Code formatting is consistent"
  - "TypeScript compiles without errors"

artifacts:
  produces:
    - { path: "lint-report.md", purpose: "Quality check results" }
  updates: []

permissions:
  tools:
    - name: "bash"
      ops: ["execute"]
    - name: "filesystem"
      ops: ["read"]

timeouts:
  softSeconds: 120
  hardSeconds: 300

idempotent: true
dryRun: true
estimatedRuntimeSec: 60
costHints: "Low I/O; linting operations"

references:
  - "docs/constitution.md#quality-standards"
  - "CLAUDE.md#quality-gates"
---

**Slash Command:** `/quality:run-linter`

**Goal:**  
Execute linting and fix all quality issues before commits.

**Prompt:**  
1) Confirm lane (**lightweight/spec**) against `CLAUDE.md` decision rules.  
2) Execute linting and formatting:
   ```bash
   pnpm lint
   pnpm format
   ```
3) Check ESLint rules in `eslint.config.mjs` and Prettier config.
4) Fix TypeScript errors, unused imports, and formatting issues.
5) Verify all files pass quality gates.
6) Produce quality **report** and **link** results in related Issue/PR.
7) Emit **Result**: quality status, issues fixed, and next suggested command.

**Examples:**  
- `/quality:run-linter` → runs linting and fixes all issues
- `/quality:run-linter --dry-run` → show linting results without fixes.

**Failure & Recovery:**  
- If linting fails → report specific errors and suggest manual fixes.
- If config missing → suggest setting up ESLint/Prettier configuration.
