---
periodStart: 2025-09-04
periodEnd: 2025-09-18
generatedAtUTC: 2025-09-19T07:27:10.717Z
---

# Bi-Weekly Telemetry Report

## Summary Metrics (Last 14 Days)

• **Lane usage:** Lightweight: (no data in period) · Spec-driven: (no data in period)
• **Median time-to-PR:** (no data in period)
• **Failed checks:** 3
• **Docs/Routing drift:** 2
• **Spec guard trips:** 0

## Founder Cheatsheet (what to look for)

- If Lightweight < 60% → you may be over-documenting. Prefer Lightweight for small changes.
- If Median time-to-PR ↑ → trim steps/tests for small PRs; revisit Decision Rules.
- If Failed checks ↑ → fix flaky tests/checks; keep PRs smaller.
- If Docs/Routing drift > 0 → fix routing/links now (AIs will route wrong).
- If Spec guard trips > 0 → relabel PR or move artifacts out; keep Lightweight lane clean.

## Period Details

**Report generated:** Sep 19, 2025, 07:27 AM UTC

**Data sources:** Telemetry logs, git history, CI workflow analysis

---

*This report is generated automatically every two weeks (1st and 15th). To run manually: `pnpm run telemetry:biweekly`*
