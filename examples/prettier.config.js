import { definePrettierConfig } from '@hhfe/vue3-lint-config/prettier'

export default definePrettierConfig({
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  // 你可以传递任何 Prettier 配置选项
  // 如 printWidth、trailingComma、bracketSpacing 等
}) 