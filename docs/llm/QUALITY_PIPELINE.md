# Quality Pipeline (for Claude Code hooks)

We run lint/format + fast unit tests after each `edit_file` via a single PostToolUse hook ("Smart Dispatcher").

Failures feed back to the model via exit code 2 so it can self-correct.

Keep hooks scoped to source/test paths to stay fast.

## Commands run by the dispatcher

- `eslint --fix` and `prettier --write` on changed files.
- `vitest run --changed` (if Vitest is installed).