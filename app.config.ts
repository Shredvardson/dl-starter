export const appConfig = {
  name: "Your App",
  features: { billing: false, orgs: false, ai: false },
  brand: { hue: 222 }
} as const;

export type AppConfig = typeof appConfig;