# Git Workflow

Consolidated git operations using `scripts/git-workflow.sh`:

## Quick Commands (via npm)
- `pnpm git:start <branch-name>` - Start new feature branch
- `pnpm git:status` - Comprehensive git status  
- `pnpm git:cleanup` - Preview branch cleanup (dry-run)
- `pnpm git:cleanup-force` - Execute branch cleanup
- `pnpm git:finish` - Clean current branch after merge

## Branch Lifecycle
1. **Start**: `pnpm git:start fix/login-bug`
2. **Work**: Make changes, commit normally
3. **PR**: `pnpm pr:create` (auto-fills verification)
4. **Finish**: `pnpm git:finish` (after merge)

## Safety Features
- Prevents cleanup of main/develop/release
- Checks for open PRs before remote deletion
- Fetches latest before operations
- Dry-run preview for cleanup operations

Replaces old `simple-git.sh` with better integration.