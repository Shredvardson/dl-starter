import { z } from 'zod';

// Prompt loader utilities
export function loadPrompt(name: string, variables: Record<string, string> = {}): string {
  // Placeholder implementation for prompt loading
  let prompt = getPromptTemplate(name);

  // Simple variable substitution
  Object.entries(variables).forEach(([key, value]) => {
    prompt = prompt.replace(new RegExp(`{{${key}}}`, 'g'), value);
  });

  return prompt;
}

function getPromptTemplate(name: string): string {
  const templates: Record<string, string> = {
    system: 'You are a helpful assistant. {{context}}',
    user_query: 'Please help me with: {{query}}',
  };

  return templates[name] || `Unknown prompt template: ${name}`;
}

// AI response schema
export const AIResponseSchema = z.object({
  content: z.string(),
  model: z.string(),
  usage: z
    .object({
      prompt_tokens: z.number(),
      completion_tokens: z.number(),
      total_tokens: z.number(),
    })
    .optional(),
});

export type AIResponse = z.infer<typeof AIResponseSchema>;
