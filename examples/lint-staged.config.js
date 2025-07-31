import { defineLintStagedConfig } from '@hhfe/vue3-lint-config/lint-staged'

// 使用默认配置（推荐）
export default defineLintStagedConfig({
  eslint: true,
  stylelint: true,
  prettier: true,
})
