# Pull Request

## Summary
Brief description of the changes and why they're needed.

## Scope
- [ ] Single task type (feature/refactor/test/docs)
- [ ] Only touched files listed in docs/llm/context-map.json

## Doctor & Quality Checks
- [ ] I ran `pnpm doctor` locally (no fails)
- [ ] All referenced scripts/paths in my changed docs exist
- [ ] New `.claude/commands/*` files are linked in `CLAUDE.md`
- [ ] If I intentionally left placeholders, I added them to `.doctor-allowlist.json` (with comment why)

## Safety
- [ ] `pnpm lint` passes without errors
- [ ] `pnpm typecheck` passes without errors  
- [ ] `pnpm build` succeeds
- [ ] `pnpm test` passes (if tests exist)

## LLM Guardrails
- [ ] Used adapters (no vendor SDKs in UI)
- [ ] No hardcoded hex colors (tokenized Tailwind only)

## Testing
- [ ] Existing tests pass
- [ ] New tests added for new functionality
- [ ] Manual testing completed (if applicable)

## Breaking Changes
- [ ] This PR includes breaking changes
- [ ] Migration guide provided (if applicable)
