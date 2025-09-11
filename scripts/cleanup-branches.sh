#!/usr/bin/env bash
set -euo pipefail

# Branch cleanup script - safely removes merged local and remote branches
# Usage: bash scripts/cleanup-branches.sh [--dry-run|--current]
#   --dry-run: Show what would be deleted without actually doing it
#   --current: Clean up the current branch after switching to main (useful after merge)

DRY_RUN=false
CLEANUP_CURRENT=false

if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN=true
  echo "🔍 DRY RUN MODE - showing what would be deleted"
elif [[ "${1:-}" == "--current" ]]; then
  CLEANUP_CURRENT=true
  echo "🔄 CURRENT BRANCH MODE - cleaning up current branch after merge"
fi

echo "🧹 Cleaning up merged branches..."

# Handle --current mode (clean up the branch we're currently on)
if [[ "$CLEANUP_CURRENT" == "true" ]]; then
  CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
  
  if [[ "$CURRENT_BRANCH" == "main" || "$CURRENT_BRANCH" == "develop" || "$CURRENT_BRANCH" == "release" ]]; then
    echo "❌ Cannot cleanup main/develop/release branch"
    exit 1
  fi
  
  echo "📍 Current branch: $CURRENT_BRANCH"
  
  # Check if it's merged
  git fetch -p
  git switch main >/dev/null 2>&1 || { echo "❌ Failed to switch to main"; exit 1; }
  git pull >/dev/null 2>&1 || { echo "❌ Failed to pull main"; exit 1; }
  
  if git branch --merged origin/main | grep -q "  $CURRENT_BRANCH"; then
    echo "✅ Branch '$CURRENT_BRANCH' is merged, cleaning up..."
    git branch -d "$CURRENT_BRANCH"
    
    # Also clean remote if no open PR
    OPEN_PRS=$(gh pr list --head "$CURRENT_BRANCH" --state open --json number --jq 'length' 2>/dev/null || echo "0")
    if [[ "$OPEN_PRS" == "0" ]]; then
      git push origin --delete "$CURRENT_BRANCH" >/dev/null 2>&1 || echo "  ℹ️  Remote branch already deleted"
    fi
    
    echo "🎉 Branch '$CURRENT_BRANCH' cleaned up!"
    exit 0
  else
    echo "⚠️  Branch '$CURRENT_BRANCH' is not merged yet"
    exit 1
  fi
fi

# Normal cleanup mode
git fetch -p
git switch main >/dev/null 2>&1 || { echo "❌ Failed to switch to main"; exit 1; }
git pull >/dev/null 2>&1 || { echo "❌ Failed to pull main"; exit 1; }

echo "✅ On main branch, fetched latest"

# 1. Clean local merged branches
echo ""
echo "📍 Local branches merged to origin/main:"
LOCAL_BRANCHES=$(git branch --merged origin/main | egrep -v '^\*|main$|develop$|release' || true)

if [[ -z "$LOCAL_BRANCHES" ]]; then
  echo "  ✨ No local merged branches to clean"
else
  while IFS= read -r branch; do
    branch=$(echo "$branch" | xargs) # trim whitespace
    if [[ "$DRY_RUN" == "true" ]]; then
      echo "  [DRY RUN] Would delete local branch: $branch"
    else
      echo "  🗑️  Deleting local branch: $branch"
      git branch -d "$branch"
    fi
  done <<< "$LOCAL_BRANCHES"
fi

# 2. Clean remote merged branches (skip those with open PRs)
echo ""
echo "📍 Remote branches merged to origin/main:"
REMOTE_BRANCHES=$(git branch -r --merged origin/main | sed 's|  origin/||' | egrep -v '^main$|^develop$|^release' || true)

if [[ -z "$REMOTE_BRANCHES" ]]; then
  echo "  ✨ No remote merged branches to clean"
else
  while IFS= read -r branch; do
    branch=$(echo "$branch" | xargs) # trim whitespace
    
    # Check if branch has open PR
    OPEN_PRS=$(gh pr list --head "$branch" --state open --json number --jq 'length' 2>/dev/null || echo "0")
    
    if [[ "$OPEN_PRS" != "0" ]]; then
      echo "  ⏭️  Skip $branch (has open PR)"
    elif [[ "$DRY_RUN" == "true" ]]; then
      echo "  [DRY RUN] Would delete remote branch: $branch"
    else
      echo "  🗑️  Deleting remote branch: $branch"
      git push origin --delete "$branch" >/dev/null 2>&1 || echo "    ⚠️  Failed to delete $branch (may already be gone)"
    fi
  done <<< "$REMOTE_BRANCHES"
fi

echo ""
if [[ "$DRY_RUN" == "true" ]]; then
  echo "🔍 Dry run complete! Run without --dry-run to actually delete branches."
else
  echo "✅ Branch cleanup complete!"
  echo "💡 Tip: Use 'git prune-merged' alias for quick local cleanup"
fi