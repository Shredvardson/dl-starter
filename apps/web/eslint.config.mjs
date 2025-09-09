import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

const eslintConfig = [
  // Base JS rules
  js.configs.recommended,

  // Bring in legacy shareable configs/plugins (e.g. Next)
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Repo-specific ignores
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
]

export default eslintConfig
