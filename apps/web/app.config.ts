export const appConfig = {
  name: 'Your App',
  features: { billing: false, orgs: false, ai: false, monitoring: true },
  brand: { hue: 222 },
} as const;

export type AppConfig = typeof appConfig;
