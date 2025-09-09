import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
})

const eslintConfig = [
  ...compat.extends('eslint:recommended', 'next/core-web-vitals', 'next/typescript'),
  { ignores: ['.next/**', 'node_modules/**', 'dist/**', 'next-env.d.ts'] },
]

export default eslintConfig
