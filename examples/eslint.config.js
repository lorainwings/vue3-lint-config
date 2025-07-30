import { defineEslintConfig } from '@hhfe/vue3-lint-config/eslint'

export default defineEslintConfig({
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
  },
  // 你也可以传递 plugins、extends、overrides 等
}) 