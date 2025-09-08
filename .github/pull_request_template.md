## Summary

## Scope

- [ ] Single task type (feature/refactor/test/docs)
- [ ] Only touched files listed in docs/llm/context-map.json

## Safety

- [ ] pnpm exec tsc --noEmit
- [ ] pnpm build
- [ ] pnpm test -- --run (if tests exist)

## LLM Guardrails

- [ ] Used adapters (no vendor SDKs in UI)
- [ ] No hardcoded hex colors (tokenized Tailwind only)
