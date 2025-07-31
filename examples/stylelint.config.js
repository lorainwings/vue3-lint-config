import { defineStylelintConfig } from '@hhfe/vue3-lint-config/stylelint'

export default defineStylelintConfig({
  rules: {
    'color-hex-case': 'upper',
    'block-no-empty': null,
  },
  // 你也可以传递其他 Stylelint 配置选项
  // 如 extends、plugins、overrides、ignoreFiles 等
}) 