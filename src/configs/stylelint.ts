import type { StylelintConfig } from '../types'

export interface StylelintConfigOptions {
  scss?: boolean
  vue?: boolean
  order?: boolean
  prettier?: boolean
}

export function createStylelintConfig(options: StylelintConfigOptions = {}): StylelintConfig {
  const config: StylelintConfig = {


    extends: ['stylelint-config-recess-order', 'stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
    plugins: ['stylelint-scss'],
    ignoreFiles: ['**/*', '!src/**/*', 'src/**/*.{js,jsx,ts,tsx}'],
    rules: {

      'scss/at-rule-no-unknown': true,
      'function-no-unknown': null,
      'value-no-vendor-prefix': null,
      'property-no-vendor-prefix': null,
      'selector-class-pattern':
        '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$|^Mui.*$|^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
      'font-family-no-missing-generic-family-keyword': null,
      'scss/dollar-variable-pattern': null,
      'block-no-empty': null,
      'no-empty-source': null,
      'property-no-unknown': null,
      'no-descending-specificity': null,
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: ['export', 'deep', 'global', 'import']
        }
      ],
      'rule-empty-line-before': [
        'always',
        {
          except: ['first-nested'],
          ignore: ['after-comment']
        }
      ],
      'custom-property-empty-line-before': [
        'always',
        {
          except: ['after-custom-property', 'first-nested']
        }
      ],
      'declaration-empty-line-before': [
        'always',
        {
          except: ['after-declaration', 'first-nested']
        }
      ],
      'at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: [
            'tailwind',
            'apply',
            'variants',
            'responsive',
            'screen',
            'function',
            'if',
            'each',
            'include',
            'mixin',
            'return',
            'use',
            'for'
          ]
        }
      ],
      'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
      'order/order': ['custom-properties', 'declarations'],
      'order/properties-order': ['width', 'height']
    }
  }

  // SCSS specific rules
  if (options.scss !== false) {
    config.rules = {
      ...config.rules,
      'scss/no-global-function-names': null,
      'declaration-property-value-no-unknown': null,
      'scss/dollar-variable-pattern': null,
      'block-no-empty': null,
      'comment-empty-line-before': null,
      'no-empty-source': null,
      'property-no-unknown': null,
      'selector-pseudo-class-no-unknown': [
        true,
        {
          ignorePseudoClasses: ['deep', 'v-deep']
        }
      ]
    }
  }

  // Vue specific overrides
  if (options.vue !== false) {
    config.overrides = [
      {
        files: ['src/**/*.vue'],
        extends: [
          'stylelint-config-recess-order',
          'stylelint-config-standard-scss',
          'stylelint-config-recommended-vue/scss'
        ],
        plugins: ['stylelint-scss'],
        rules: {
          'scss/no-global-function-names': null,
          'declaration-property-value-no-unknown': null,
          'scss/dollar-variable-pattern': null,
          'block-no-empty': null,
          'comment-empty-line-before': null,
          'no-empty-source': null,
          'property-no-unknown': null,
          'selector-pseudo-class-no-unknown': [
            true,
            {
              ignorePseudoClasses: ['deep', 'v-deep']
            }
          ]
        }
      }
    ]
  }

  // Prettier integration
  if (options.prettier !== false) {
    config.extends = [...(config.extends || []), 'stylelint-config-prettier']
    config.plugins = [...(config.plugins || []), 'stylelint-prettier']
    config.rules = {
      ...config.rules,
      'prettier/prettier': true
    }
  }

  return config
}
 
/**
 * Define Stylelint configuration with HHFE defaults
 * @param options User options to override defaults
 * @returns Stylelint configuration object
 */
export function defineStylelintConfig(options: StylelintConfigOptions = {}): StylelintConfig {
  return createStylelintConfig(options)
}
 