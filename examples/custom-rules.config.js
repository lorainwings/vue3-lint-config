import { defineLintConfig } from '@hhfe/vue3-lint-config'

export default defineLintConfig({
  // ESLint 配置 - 包含自定义规则
  eslint: {
    vue: true,
    typescript: true,
    // 自定义 ESLint 规则
    overrides: {
      'no-console': 'warn',
      'no-debugger': 'error',
      'vue/max-attributes-per-line': ['error', { singleline: 3 }],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    },
  },

  // Stylelint 配置 - 包含自定义规则
  stylelint: {
    scss: true,
    vue: true,
    order: true,
    prettier: true,
    // 自定义 Stylelint 规则
    overrides: {
      'color-hex-case': 'upper',
      'block-no-empty': null,
      'selector-class-pattern': null,
    },
  },

  // Prettier 配置 - 自定义格式化选项
  prettier: {
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'es5',
    printWidth: 100,
    bracketSpacing: true,
    arrowParens: 'avoid',
  },

  // Commitlint 配置 - 自定义提交规范
  commitlint: {
    conventional: true,
    customRules: {
      'type-enum': [2, 'always', [
        'feat', 'fix', 'docs', 'style', 'refactor', 
        'perf', 'test', 'build', 'ci', 'chore', 'revert'
      ]],
      'header-max-length': [2, 'always', 100],
      'subject-case': [2, 'always', 'lower-case'],
    },
  },

  // Lint-staged 配置 - 自定义文件处理
  lintStaged: {
    eslint: true,
    stylelint: true,
    prettier: true,
    // 可以添加自定义文件处理规则
    // '*.{js,jsx,ts,tsx,vue}': ['eslint --fix'],
    // '*.{css,scss,less}': ['stylelint --fix'],
    // '*.{js,jsx,ts,tsx,vue,css,scss,less,md,json}': ['prettier --write'],
  },

  // 通用配置
  gitignore: true,
  autoRenamePlugins: true,
  componentExts: [],
  ignores: ['dist/', 'node_modules/', '*.d.ts', 'coverage/'],
}) 