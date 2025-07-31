import type { Linter } from 'eslint'
import globals from 'globals'
import eslintPluginVue from 'eslint-plugin-vue'

export interface ESLintConfigOptions {
  vue?: boolean
  typescript?: boolean
}

export function createESLintConfig(options: ESLintConfigOptions = {}): Linter.FlatConfig[] {
  const configs: Linter.FlatConfig[] = []

  const ignores = ['node_modules/', 'dist/', 'public/', 'src/assets/', '*.d.ts', '*.jpg', '*.jpeg', '*.png', '*.gif']
  const commonGlobals = { ...globals.browser, ...globals.node }

  // Base config
  configs.push({
    ignores,
    languageOptions: {
      globals: commonGlobals
    }
  })

  // Vue config
  if (options.vue !== false) {
    const vueEslint = eslintPluginVue.configs['flat/recommended']
    configs.push(...vueEslint)
  }

  // Vue specific rules
  if (options.vue !== false) {
    configs.push({
      files: ['src/**/*.{js,ts,jsx,tsx,vue}'],
      rules: {
        'vue/v-on-event-hyphenation': [
          'warn',
          'always',
          {
            autofix: true
          }
        ],
        'vue/html-self-closing': [
          'warn',
          {
            html: {
              void: 'any',
              normal: 'always',
              component: 'always'
            },
            svg: 'always',
            math: 'always'
          }
        ],
        'vue/attribute-hyphenation': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/component-options-name-casing': ['warn', 'PascalCase'],
        'vue/component-name-in-template-casing': [
          'warn',
          'PascalCase',
          {
            registeredComponentsOnly: false,
            ignores: []
          }
        ],
        'vue/component-api-style': ['error', ['script-setup', 'composition']],
        'vue/define-macros-order': ['error', { order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'] }],
        'vue/custom-event-name-casing': [
          'warn',
          'kebab-case',
          {
            ignores: []
          }
        ],
        'vue/define-emits-declaration': ['warn', 'type-based'],
        'vue/define-props-declaration': ['warn', 'type-based'],
        'vue/slot-name-casing': ['warn', 'camelCase'],
      },
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        }
      }
    })
  }

  // Common rules
  configs.push({
    files: ['src/**/*.{js,ts,jsx,tsx,vue}'],
    rules: {
      'no-unused-vars': 'warn',
      'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
      'array-callback-return': 'error',
      'sort-imports': 'off',
      'no-async-promise-executor': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn'
    }
  })

  return configs
}

/**
 * Define ESLint configuration with HHFE defaults
 * @param options User options to override defaults
 * @returns ESLint flat config array
 */
export function defineEslintConfig(options: ESLintConfigOptions = {}): Linter.FlatConfig[] {
  return createESLintConfig(options)
}
