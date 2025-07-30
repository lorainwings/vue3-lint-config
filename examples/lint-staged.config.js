import { defineLintStagedConfig } from '@hhfe/vue3-lint-config/lint-staged'

export default defineLintStagedConfig({
  '*.js': ['eslint --fix'],
  '*.css': ['stylelint --fix'],
  '*.md': ['prettier --write'],
}) 