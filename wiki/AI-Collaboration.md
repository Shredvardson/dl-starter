# AI Collaboration Best Practices

## Table of Contents
- [Overview](#overview)
- [Effective Prompting](#effective-prompting)
- [Workflow Integration](#workflow-integration)
- [Quality Standards](#quality-standards)
- [Common Patterns](#common-patterns)
- [Troubleshooting](#troubleshooting)

## Overview

This guide covers best practices for collaborating with AI agents (Claude, GPT-5) in the Dissonance Labs development process.

### AI Role
- **Advisory**: AI provides suggestions and implementations
- **Human Authority**: Final decisions remain with humans
- **Quality Partner**: AI helps maintain code quality and standards
- **Process Enforcer**: AI follows established workflows and guardrails

## Effective Prompting

### Be Specific and Contextual
```bash
# ✅ Good: Specific with context
"Add analytics tracking to the header Help link. Use the existing useTrackClick hook and follow the pattern from the Analytics link."

# ❌ Poor: Vague and generic  
"Add tracking to header"
```

### Reference Existing Patterns
```bash
# ✅ Good: References existing code
"Implement user authentication following the same pattern as the analytics system - with feature flags, TypeScript types, and E2E tests."

# ❌ Poor: No guidance provided
"Add user authentication"
```

### Specify Constraints
```bash
# ✅ Good: Clear constraints
"Create a modal component using shadcn/ui Dialog, no custom CSS, must be accessible, and include proper TypeScript types."

# ❌ Poor: No constraints
"Create a modal"
```

## Workflow Integration

### Starting New Work

#### Simple Changes:
```bash
/dev:plan-feature
# AI will ask clarifying questions
# Provide specific requirements and constraints
# Review the generated plan before proceeding
```

#### Complex Features:
```bash
/specify
# Provide detailed problem statement
# Include user stories and acceptance criteria
# Specify technical constraints and dependencies

/plan
# Review generated implementation plan
# Request modifications if needed

/tasks  
# Break plan into actionable tasks
# Prioritize tasks by dependencies
```

### During Implementation

#### Code Generation:
```bash
# Be explicit about requirements
"Implement the AnalyticsChart component with:
- SVG-based bar charts
- Responsive design using Tailwind
- TypeScript props interface
- Error handling for empty data
- Test ID attributes for E2E testing"
```

#### Code Review:
```bash
# In PR comments
@claude /review

# AI will provide:
# - Code quality suggestions
# - Security considerations  
# - Performance improvements
# - Testing recommendations
```

## Quality Standards

### AI Must Follow All Project Standards
- **TypeScript**: Strict typing, no `any` types
- **Testing**: Unit tests and E2E coverage
- **Security**: No secrets, input validation
- **Styling**: shadcn/ui components, design tokens
- **Documentation**: Code comments and README updates

### Code Review Checklist
When working with AI-generated code, verify:

```typescript
// ✅ Proper TypeScript types
interface AnalyticsEvent {
  id: string;
  type: 'page_view' | 'click';
  timestamp: number;
}

// ✅ Error handling
try {
  const data = getAnalyticsData();
  return calculateMetrics(data);
} catch (error) {
  console.error('Analytics calculation failed:', error);
  return defaultMetrics;
}

// ✅ Accessibility
<button 
  aria-label="View analytics dashboard"
  className="text-[hsl(var(--text-muted))]"
>
  Analytics
</button>

// ✅ Test coverage
test('should track page views correctly', async () => {
  await page.goto('/dashboard');
  const analyticsData = await getStoredAnalytics(page);
  expect(analyticsData.events).toContainPageView('/dashboard');
});
```

## Common Patterns

### Feature Development Pattern
```bash
# 1. Specify requirements clearly
/specify
"User authentication system with email/password, JWT tokens, and Supabase integration"

# 2. Review and refine plan
/plan
# Review generated plan, request changes if needed

# 3. Implement incrementally  
/dev:implement
# Focus on one component at a time
# Test each piece before moving forward

# 4. Security review
/dev:refactor-secure
# Let AI review for security issues
# Implement recommended hardening
```

### Bug Fix Pattern
```bash
# 1. Describe the problem specifically
/dev:plan-feature
"Fix header analytics tracking - clicks aren't being recorded in localStorage. The useTrackClick hook should store events but isn't working."

# 2. Provide debugging context
"Error occurs in Chrome DevTools: 'Cannot read property events of null'. Check AnalyticsProvider initialization."

# 3. Specify testing requirements
"Include E2E test to verify click tracking works end-to-end."
```

### Refactoring Pattern
```bash
# 1. Explain the current state
"The analytics chart component has hardcoded styling. Refactor to use design tokens and make it responsive."

# 2. Specify the desired outcome
"Use Tailwind design tokens like hsl(var(--primary)), ensure mobile-friendly layout, maintain existing functionality."

# 3. Request tests
"Update existing tests and add responsive behavior testing."
```

## Troubleshooting

### When AI Suggestions Don't Work

#### Debug Information to Provide:
```bash
# Include error messages
"Getting TypeScript error: Property 'events' does not exist on type 'AnalyticsData | null'"

# Include relevant code context
"In AnalyticsProvider.tsx line 45, the calculateMetrics function..."

# Include environment details
"Running Node 20.4, Next.js 15, TypeScript 5.6"
```

#### Request Step-by-Step Solutions:
```bash
# Ask for debugging approach
"Walk me through debugging this analytics tracking issue step by step"

# Request incremental fixes
"Fix just the TypeScript errors first, then address the functionality"
```

### When AI Doesn't Understand Requirements

#### Provide Examples:
```bash
# Show existing patterns
"Follow the same pattern as the Header component in src/components/Header.tsx"

# Reference documentation
"Use the authentication pattern described in docs/recipes/auth.md"

# Include acceptance criteria
"The feature is complete when:
- Users can log in with email/password
- Session persists across page refreshes  
- Protected routes redirect to login
- All tests pass"
```

### Quality Gate Failures

#### Provide Full Context:
```bash
# Include error output
"E2E test failing with: 'Expected element to be visible but got hidden'"

# Include test code
"In tests/analytics.spec.ts line 23: await expect(page.getByTestId('analytics-dashboard')).toBeVisible()"

# Request specific fix
"Fix the test to properly wait for the analytics data to load before checking visibility"
```

## Best Practices Summary

### Do:
- ✅ Be specific and provide context
- ✅ Reference existing patterns and code
- ✅ Specify quality requirements upfront
- ✅ Review AI-generated code thoroughly
- ✅ Test incrementally and frequently
- ✅ Use slash commands for structured workflows

### Don't:
- ❌ Give vague or generic instructions
- ❌ Skip code review of AI contributions
- ❌ Ignore TypeScript errors or warnings
- ❌ Accept solutions without understanding them
- ❌ Bypass quality gates or testing requirements
- ❌ Let AI make architectural decisions without review

---
*Effective AI collaboration combines clear communication with rigorous quality standards*