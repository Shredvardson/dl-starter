---
slash-command: "/github:update-wiki"
lane: "lightweight"
purpose: "Sync current project state to wiki pages for GPT-5 context"
when: "After major feature completion or architectural changes"
example: "Update wiki after implementing user authentication system"
risks:
  - "None - read-only wiki documentation"
riskLevel: "LOW"
requiresHITL: false
artifacts: ["Wiki content updates", "Manual copy-paste instructions"]
allowed-tools:
  - "Read(**/*.md)"
  - "Glob(docs/**)"
  - "Grep(pattern:# |## |### )"
anchor: "docs/llm/risk-policy.json#commandDefaults"
---

**Slash Command:** `/github:update-wiki`
**Goal:** Sync current project state to wiki pages for GPT-5 context.
**Prompt:**
Update relevant wiki pages with current project state:
- Add new features to Current-Features.md
- Update architecture changes in Architecture-Overview.md  
- Document new patterns in Data-Model.md
- Ensure Home.md reflects current project status
Generate updated content and provide copy-paste instructions for manual wiki update.