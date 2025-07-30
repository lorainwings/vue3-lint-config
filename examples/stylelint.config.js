import { defineStylelintConfig } from '@hhfe/vue3-lint-config/stylelint'

export default defineStylelintConfig({
  rules: {
    'color-hex-case': 'upper',
    'block-no-empty': null,
  },
  // 你也可以传递 extends、plugins、overrides 等
}) 