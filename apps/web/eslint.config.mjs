// apps/web/eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

export default [
  // Use Next legacy presets via compat; no '@eslint/js' import
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript'
  ),
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'dist/**',
      'next-env.d.ts'
    ],
  },
]