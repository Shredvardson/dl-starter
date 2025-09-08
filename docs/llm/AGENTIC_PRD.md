# Agentic PRD

## Objective

Build a Next.js 15.5.2 application with App Router, TypeScript, and Tailwind CSS. Maintain code quality through automated testing and linting.

## In Scope

- React components in `src/app/` using App Router patterns
- TypeScript interfaces and type safety
- Tailwind CSS styling with dark mode support
- Unit and E2E testing with Vitest/Playwright
- ESLint/Prettier code formatting

## Out of Scope

- Backend services outside Next.js API routes
- Database migrations (use Prisma/Drizzle schemas only)
- Infrastructure deployment scripts

## Structured I/O

```typescript
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

interface ApiResponse<T> {
  data: T;
  error?: string;
  status: 'success' | 'error';
}

interface TestScenario {
  description: string;
  input: unknown;
  expected: unknown;
}
```

## System Instructions

- Use imperative tone in commit messages
- Prefer composition over inheritance
- Always validate inputs in API routes
- Write tests before implementation
