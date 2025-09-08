import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    '../../packages/ui/**/*.{ts,tsx,mdx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;