import { defineEslintConfig } from '@hhfe/vue3-lint-config/eslint'

export default defineEslintConfig({
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
  },
  // 你也可以传递其他 ESLint 配置选项
  // 如 plugins、extends、overrides、languageOptions 等
}) 