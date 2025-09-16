# Pull Request

## Summary
_What changed and why in 1–3 sentences._

## Scope
- [ ] Single task type (feature/refactor/test/docs)
- [ ] Only touched files listed in docs/llm/context-map.json

## AI Review Status
- [ ] **AI Review:** ⚠️ Not requested / ✅ Requested (`@claude /review`)
- [ ] **Security Scan:** ⚠️ Not applicable / ✅ Completed automatically

_If AI review completed, paste advisory feedback summary from doctor report below:_

```
[Paste "🤖 AI Review (Advisory)" or "🛡️ AI Security Review (Advisory)" sections from artifacts/doctor-report.md]
```

## Verification
Paste real outputs or "OK":
- [ ] `pnpm run doctor:report` (attach artifacts/doctor-report.md)
- [ ] `pnpm -w turbo run lint`
- [ ] `pnpm -w turbo run typecheck`
- [ ] `pnpm -w turbo run build`
- [ ] `pnpm -w turbo run test:e2e` (or N/A)

## Doctor & Quality Checks
- [ ] I ran `pnpm doctor` locally (no fails)
- [ ] All referenced scripts/paths in my changed docs exist
- [ ] New `.claude/commands/*` files are linked in `CLAUDE.md`
- [ ] If I intentionally left placeholders, I added them to `.doctor-allowlist.json` (with comment why)

## LLM Guardrails
- [ ] Used adapters (no vendor SDKs in UI)
- [ ] No hardcoded hex colors (tokenized Tailwind only)
- [ ] Updated docs and `llm/context-map.json` if scripts/paths changed

## Breaking changes / Migration
_None_ (or describe + steps)
