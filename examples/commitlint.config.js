import { defineCommitlintConfig } from '@hhfe/vue3-lint-config/commitlint'

export default defineCommitlintConfig({
  rules: {
    'header-max-length': [2, 'always', 100],
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
  },
  // 你也可以传递其他 Commitlint 配置选项
  // 如 extends、plugins 等
}) 