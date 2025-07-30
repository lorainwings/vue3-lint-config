import type { PrettierConfig } from '../types'

export interface PrettierConfigOptions {
  semi?: boolean
  singleQuote?: boolean
  tabWidth?: number
  useTabs?: boolean
  trailingComma?: 'none' | 'es5' | 'all'
  printWidth?: number
  bracketSpacing?: boolean
  bracketSameLine?: boolean
  arrowParens?: 'avoid' | 'always'
  endOfLine?: 'lf' | 'crlf' | 'cr' | 'auto'
}

export function createPrettierConfig(options: PrettierConfigOptions = {}): PrettierConfig {
  return {
    semi: options.semi ?? false,
    singleQuote: options.singleQuote ?? true,
    tabWidth: options.tabWidth ?? 2,
    useTabs: options.useTabs ?? false,
    trailingComma: options.trailingComma ?? 'es5',
    printWidth: options.printWidth ?? 100,
    bracketSpacing: options.bracketSpacing ?? true,
    bracketSameLine: options.bracketSameLine ?? false,
    arrowParens: options.arrowParens ?? 'avoid',
    endOfLine: options.endOfLine ?? 'lf',
    // Vue specific
    vueIndentScriptAndStyle: false,
    // HTML specific
    htmlWhitespaceSensitivity: 'css',
    // CSS specific
    cssEnable: ['css', 'less', 'scss'],
    // JSON specific
    jsonRecursiveSort: true,
    // YAML specific
    yamlSingleQuote: true,
    // Markdown specific
    proseWrap: 'never',
    // Override for specific files
    overrides: [
      {
        files: '*.md',
        options: {
          printWidth: 80,
          proseWrap: 'always',
          tabWidth: 2,
          useTabs: false,
        },
      },
      {
        files: '*.json',
        options: {
          printWidth: 80,
          tabWidth: 2,
        },
      },
      {
        files: '*.yml',
        options: {
          tabWidth: 2,
        },
      },
    ],
  }
}
