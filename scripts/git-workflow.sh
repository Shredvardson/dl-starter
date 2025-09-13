#!/usr/bin/env bash
set -euo pipefail

# Git Workflow Helper - consolidated git operations
# Usage: bash scripts/git-workflow.sh <command>

COMMAND="${1:-help}"

case "$COMMAND" in
  "start")
    BRANCH_NAME="${2:-}"
    if [[ -z "$BRANCH_NAME" ]]; then
      echo "❌ Usage: bash scripts/git-workflow.sh start <branch-name>"
      echo "   Example: bash scripts/git-workflow.sh start fix/login-bug"
      exit 1
    fi
    
    echo "🚀 Starting new work: $BRANCH_NAME"
    git fetch -p
    git switch main
    git pull origin main
    git switch -c "$BRANCH_NAME"
    echo "✅ Ready to work on branch: $BRANCH_NAME"
    ;;
    
  "status")
    echo "📊 Current Git Status:"
    echo "📍 Branch: $(git rev-parse --abbrev-ref HEAD)"
    echo "🔄 Status:"
    git status --short
    echo ""
    echo "🌿 Local branches:"
    git branch -v
    echo ""
    echo "📡 Recent commits:"
    git log --oneline -5
    ;;

  "cleanup")
    echo "🧹 Running comprehensive branch cleanup..."
    bash scripts/cleanup-branches.sh
    ;;

  "cleanup-dry")
    echo "🔍 Dry run cleanup..."
    bash scripts/cleanup-branches.sh --dry-run
    ;;

  "finish-branch")
    echo "🏁 Finishing current branch..."
    bash scripts/cleanup-branches.sh --current
    ;;
    
  "help"|*)
    echo "🎯 Git Workflow Helper (Consolidated)"
    echo ""
    echo "Commands:"
    echo "  start <name>    - Start new feature branch from latest main"
    echo "  status          - Show comprehensive git status"
    echo "  cleanup         - Clean up all merged branches (safe)"
    echo "  cleanup-dry     - Preview what cleanup would do"
    echo "  finish-branch   - Clean up current branch after merge"
    echo ""
    echo "Examples:"
    echo "  bash scripts/git-workflow.sh start fix/login-issue"
    echo "  bash scripts/git-workflow.sh status"
    echo "  bash scripts/git-workflow.sh cleanup-dry"
    echo ""
    echo "💡 This replaces the old simple-git.sh with better integration"
    ;;
esac