import type { Linter } from 'eslint'

export interface ConfigNames {
  eslint: 'eslint'
  stylelint: 'stylelint'
  prettier: 'prettier'
  commitlint: 'commitlint'
  lintStaged: 'lint-staged'
}

export interface TypedFlatConfigItem extends Omit<Linter.FlatConfig, 'files'> {
  files?: string[]
  name?: string
}

export type Awaitable<T> = T | Promise<T>

export interface OptionsConfig {
  // ESLint options
  eslint?: boolean | {
    vue?: boolean
    typescript?: boolean
    react?: boolean
    nextjs?: boolean
    svelte?: boolean
    solid?: boolean
    astro?: boolean
    unocss?: boolean
    markdown?: boolean
    yaml?: boolean
    toml?: boolean
    jsonc?: boolean
    jsdoc?: boolean
    jsx?: boolean
    node?: boolean
    test?: boolean
    perfectionist?: boolean
    imports?: boolean
    unicorn?: boolean
    regexp?: boolean
    command?: boolean
    comments?: boolean
    disables?: boolean
    ignores?: boolean
    stylistic?: boolean
    sort?: boolean
    pnpm?: boolean
  }

  // Stylelint options
  stylelint?: boolean | {
    scss?: boolean
    vue?: boolean
    order?: boolean
    prettier?: boolean
  }

  // Prettier options
  prettier?: boolean | {
    semi?: boolean
    singleQuote?: boolean
    tabWidth?: number
    useTabs?: boolean
    trailingComma?: 'none' | 'es5' | 'all'
  }

  // Commitlint options
  commitlint?: boolean | {
    conventional?: boolean
    customRules?: Record<string, any>
  }

  // Lint-staged options
  lintStaged?: boolean | {
    eslint?: boolean
    stylelint?: boolean
    prettier?: boolean
  }

  // Common options
  gitignore?: boolean
  autoRenamePlugins?: boolean
  componentExts?: string[]
  ignores?: string[]
  overrides?: Partial<Linter.RulesRecord>
}

export interface ResolvedOptions {
  eslint: {
    vue: boolean
    typescript: boolean
    react: boolean
    nextjs: boolean
    svelte: boolean
    solid: boolean
    astro: boolean
    unocss: boolean
    markdown: boolean
    yaml: boolean
    toml: boolean
    jsonc: boolean
    jsdoc: boolean
    jsx: boolean
    node: boolean
    test: boolean
    perfectionist: boolean
    imports: boolean
    unicorn: boolean
    regexp: boolean
    command: boolean
    comments: boolean
    disables: boolean
    ignores: boolean
    stylistic: boolean
    sort: boolean
    pnpm: boolean
  }
  stylelint: {
    scss: boolean
    vue: boolean
    order: boolean
    prettier: boolean
  }
  prettier: {
    semi: boolean
    singleQuote: boolean
    tabWidth: number
    useTabs: boolean
    trailingComma: 'none' | 'es5' | 'all'
  }
  commitlint: {
    conventional: boolean
    customRules: Record<string, any>
  }
  lintStaged: {
    eslint: boolean
    stylelint: boolean
    prettier: boolean
  }
  gitignore: boolean
  autoRenamePlugins: boolean
  componentExts: string[]
  ignores: string[]
  overrides: Partial<Linter.RulesRecord>
}

export interface StylelintConfig {
  extends?: string[]
  plugins?: string[]
  rules?: Record<string, any>
  ignoreFiles?: string[]
  overrides?: Array<{
    files: string[]
    extends?: string[]
    plugins?: string[]
    rules?: Record<string, any>
  }>
}

export interface PrettierConfig {
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
  [key: string]: any
}

export interface CommitlintConfig {
  extends?: string[]
  rules?: Record<string, any>
  plugins?: string[]
}

export interface LintStagedConfig {
  [pattern: string]: string | string[]
}
