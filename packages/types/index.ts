import { z } from 'zod';

// Example shared schema
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  data: z.unknown().optional(),
});

export type ApiResponse<T = unknown> = z.infer<typeof ApiResponseSchema> & {
  data?: T;
};

// Health check schema
export const HealthCheckSchema = z.object({
  status: z.literal('ok'),
  timestamp: z.string(),
});

export type HealthCheck = z.infer<typeof HealthCheckSchema>;

// Analytics types
export * from './src/analytics';
