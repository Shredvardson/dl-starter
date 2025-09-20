# Spec System

## Table of Contents
- [Overview](#overview)
- [Kernel Templates](#kernel-templates)
- [When to Use Which](#when-to-use-which)
- [Example Kernels](#example-kernels)
- [Workflow Integration](#workflow-integration)

## Overview

The Spec System uses **Kernels** - structured specification documents that define requirements, acceptance criteria, and implementation guidance for features.

Two template types serve different complexity levels:
- **Full Kernel**: Complex features requiring detailed planning
- **Micro Kernel**: Simple features with basic requirements

## Kernel Templates

### Full Kernel Template
```markdown
# [Feature Name] - Full Kernel

## Problem Statement
[What user problem does this solve?]

## Requirements
### Functional Requirements
- [ ] Requirement 1
- [ ] Requirement 2

### Non-Functional Requirements  
- [ ] Performance requirements
- [ ] Security requirements
- [ ] Accessibility requirements

## Acceptance Criteria
### User Stories
- As a [user type], I want [functionality] so that [benefit]

### Technical Criteria
- [ ] Technical requirement 1
- [ ] Technical requirement 2

## Implementation Notes
### Architecture Considerations
[High-level design decisions]

### Dependencies
[Required packages, services, or features]

### Risk Assessment
[Potential risks and mitigation strategies]

## Testing Strategy
### Unit Tests
[What to test in isolation]

### Integration Tests  
[What to test end-to-end]

### Manual Testing
[What requires human verification]
```

### Micro Kernel Template
```markdown
# [Feature Name] - Micro Kernel

## What
[Brief description of the feature]

## Why
[User value or problem solved]

## Acceptance Criteria
- [ ] Criteria 1
- [ ] Criteria 2
- [ ] Criteria 3

## Implementation Notes
[Any technical constraints or considerations]

## Testing
[Required test coverage]
```

## When to Use Which

### Use Full Kernel When:
- Multiple components involved
- Complex business logic
- New architectural patterns
- External integrations
- Security-sensitive features
- Performance-critical features

### Use Micro Kernel When:
- Single component changes
- UI improvements
- Bug fixes with clear scope
- Simple CRUD operations
- Configuration changes

## Example Kernels

### Full Kernel Example: User Authentication
```markdown
# User Authentication System - Full Kernel

## Problem Statement
Users need secure authentication to access protected features and maintain session state.

## Requirements
### Functional Requirements
- [ ] Email/password login
- [ ] JWT token management
- [ ] Password reset flow
- [ ] Session persistence

### Non-Functional Requirements
- [ ] Secure password hashing (bcrypt)
- [ ] OWASP compliance
- [ ] Sub-200ms login response time

## Acceptance Criteria
### User Stories
- As a user, I want to log in with email/password so that I can access my dashboard
- As a user, I want to reset my password so that I can regain access if forgotten

### Technical Criteria
- [ ] Passwords hashed with bcrypt (cost 12+)
- [ ] JWT tokens expire in 24 hours
- [ ] Failed login attempts rate limited

## Implementation Notes
### Architecture Considerations
- Use NextAuth.js for authentication layer
- Supabase for user storage
- Middleware for route protection

### Dependencies
- next-auth
- @supabase/auth-helpers-nextjs
- bcryptjs

## Testing Strategy
### Unit Tests
- Password hashing/verification
- JWT token validation
- Rate limiting logic

### Integration Tests
- Full login/logout flow
- Password reset flow
- Protected route access
```

### Micro Kernel Example: Header Navigation
```markdown
# Add Analytics Link to Header - Micro Kernel

## What
Add "Analytics" navigation link to the app header for easy dashboard access.

## Why
Users need quick access to their analytics dashboard from any page.

## Acceptance Criteria
- [ ] "Analytics" link appears in header navigation
- [ ] Link navigates to `/dashboard/analytics`
- [ ] Click events are tracked for analytics
- [ ] Maintains existing header styling

## Implementation Notes
- Add to `Header.tsx` component
- Use Next.js Link component
- Include analytics tracking hook

## Testing
- E2E test for navigation functionality
- Visual regression test for header layout
```

## Workflow Integration

### Spec-Driven Lane Usage:
1. **`/specify`** - Create appropriate kernel (Full or Micro)
2. **`/plan`** - Convert kernel into implementation plan
3. **`/tasks`** - Break plan into actionable development tasks
4. Execute tasks using simple workflow commands

### Quality Gates:
- All kernels must define testable acceptance criteria
- Security requirements mandatory for Full Kernels
- Performance requirements for user-facing features
- Accessibility considerations for UI changes

---
*Kernels serve as contracts between planning and implementation phases*