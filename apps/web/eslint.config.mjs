// apps/web/eslint.config.mjs
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// IMPORTANT: pass recommendedConfig/allConfig so compat can translate 'eslint:recommended'
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})

export default [
  // Use modern base directly (no compat needed for this)
  js.configs.recommended,

  // Convert legacy shareable configs (Next)
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
