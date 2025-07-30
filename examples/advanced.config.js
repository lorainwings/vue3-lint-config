import hhfe from '@hhfe/vue3-lint-config'

export default hhfe({
  // ESLint 配置
  eslint: {
    vue: true,
    typescript: true,
  },

  // Stylelint 配置
  stylelint: {
    scss: true,
    vue: true,
    order: true,
    prettier: true,
  },

  // Prettier 配置
  prettier: {
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'es5',
  },

  // Commitlint 配置
  commitlint: {
    conventional: true,
    customRules: {
      'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci', 'chore', 'revert']],
    },
  },

  // Lint-staged 配置
  lintStaged: {
    eslint: true,
    stylelint: true,
    prettier: true,
  },

  // 通用配置
  gitignore: true,
  autoRenamePlugins: true,
  componentExts: [],
  ignores: ['dist/', 'node_modules/'],
  overrides: {
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
})
