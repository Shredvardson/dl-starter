#!/usr/bin/env bash
set -euo pipefail

# Simple Git Workflow Helper
# Usage: bash scripts/simple-git.sh <command>

COMMAND="${1:-help}"

case "$COMMAND" in
  "start")
    BRANCH_NAME="${2:-}"
    if [[ -z "$BRANCH_NAME" ]]; then
      echo "❌ Usage: bash scripts/simple-git.sh start <branch-name>"
      echo "   Example: bash scripts/simple-git.sh start fix/login-bug"
      exit 1
    fi
    
    echo "🚀 Starting new work: $BRANCH_NAME"
    git switch main
    git pull origin main
    git switch -c "$BRANCH_NAME"
    echo "✅ Ready to work on branch: $BRANCH_NAME"
    ;;
    
  "finish")
    CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
    
    if [[ "$CURRENT_BRANCH" == "main" ]]; then
      echo "❌ Already on main branch"
      exit 1
    fi
    
    echo "🏁 Finishing work on: $CURRENT_BRANCH"
    echo "📋 Current status:"
    git status --short
    
    read -p "🤔 Ready to commit and push? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
      git add .
      read -p "📝 Commit message: " COMMIT_MSG
      git commit -m "$COMMIT_MSG"
      git push -u origin "$CURRENT_BRANCH"
      echo "✅ Pushed! Now create PR at: https://github.com/Shredvardson/dl-starter/compare/$CURRENT_BRANCH"
    else
      echo "⏸️  Skipped push. Run again when ready."
    fi
    ;;
    
  "cleanup")
    echo "🧹 Cleaning up merged branches..."
    git switch main
    git pull origin main
    
    # Clean local merged branches
    MERGED=$(git branch --merged origin/main | grep -v '^\*\|main$' || true)
    if [[ -n "$MERGED" ]]; then
      echo "🗑️  Deleting merged local branches:"
      echo "$MERGED"
      echo "$MERGED" | xargs -n 1 git branch -d
    else
      echo "✨ No local branches to clean up"
    fi
    
    echo "✅ Cleanup complete!"
    ;;
    
  "status")
    echo "📊 Current Git Status:"
    echo "📍 Branch: $(git rev-parse --abbrev-ref HEAD)"
    echo "📋 Status:"
    git status --short
    echo ""
    echo "🌿 Local branches:"
    git branch -v
    echo ""
    echo "📡 Recent commits:"
    git log --oneline -5
    ;;
    
  "help"|*)
    echo "🎯 Simple Git Workflow Helper"
    echo ""
    echo "Commands:"
    echo "  start <name>  - Start new feature branch from latest main"
    echo "  finish        - Commit current work and push (interactive)"
    echo "  cleanup       - Clean up merged branches"
    echo "  status        - Show current status"
    echo ""
    echo "Examples:"
    echo "  bash scripts/simple-git.sh start fix/login-issue"
    echo "  bash scripts/simple-git.sh finish"
    echo "  bash scripts/simple-git.sh cleanup"
    ;;
esac