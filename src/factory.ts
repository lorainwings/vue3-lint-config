import type { Linter } from 'eslint'
import type {  OptionsConfig, TypedFlatConfigItem } from './types'
import { createESLintConfig } from './configs/eslint'
import { createStylelintConfig } from './configs/stylelint'
import { createPrettierConfig } from './configs/prettier'
import { createCommitlintConfig } from './configs/commitlint'
import { createLintStagedConfig } from './configs/lint-staged'

export interface HHFEConfig {
  eslint?: Linter.FlatConfig[]
  stylelint?: any
  prettier?: any
  commitlint?: any
  lintStaged?: any
}

/**
 * Construct HHFE lint configuration
 *
 * @param options The options for generating the configurations
 * @param userConfigs The user configurations to be merged
 * @returns The merged configurations
 */
export function hhfe(
  options: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {}): HHFEConfig {
  const resolvedOptions = resolveOptions(options)

  const config: HHFEConfig = {}

  // ESLint configuration
  if (resolvedOptions.eslint) {
    const eslintOptions = resolveSubOptions(options, 'eslint')
    config.eslint = createESLintConfig(eslintOptions)
  }

  // Stylelint configuration
  if (resolvedOptions.stylelint) {
    const stylelintOptions = resolveSubOptions(options, 'stylelint')
    config.stylelint = createStylelintConfig(stylelintOptions)
  }

  // Prettier configuration
  if (resolvedOptions.prettier) {
    const prettierOptions = resolveSubOptions(options, 'prettier')
    config.prettier = createPrettierConfig(prettierOptions)
  }

  // Commitlint configuration
  if (resolvedOptions.commitlint) {
    const commitlintOptions = resolveSubOptions(options, 'commitlint')
    config.commitlint = createCommitlintConfig(commitlintOptions)
  }

  // Lint-staged configuration
  if (resolvedOptions.lintStaged) {
    const lintStagedOptions = resolveSubOptions(options, 'lintStaged')
    config.lintStaged = createLintStagedConfig(lintStagedOptions)
  }

  return config
}

function resolveOptions(options: OptionsConfig) {
  return {
    eslint: options.eslint !== false,
    stylelint: options.stylelint !== false,
    prettier: options.prettier !== false,
    commitlint: options.commitlint !== false,
    lintStaged: options.lintStaged !== false,
    gitignore: options.gitignore !== false,
    autoRenamePlugins: options.autoRenamePlugins !== false,
    componentExts: options.componentExts || [],
    ignores: options.ignores || [],
    overrides: options.overrides || {},
  }
}

export type ResolvedOptions<T> = T extends boolean
  ? never
  : NonNullable<T>

export function resolveSubOptions<K extends keyof OptionsConfig>(
  options: OptionsConfig,
  key: K,
): ResolvedOptions<OptionsConfig[K]> {
  const value = options[key]
  if (value === true) {
    return {} as ResolvedOptions<OptionsConfig[K]>
  }
  if (value === false) {
    return {} as ResolvedOptions<OptionsConfig[K]>
  }
  return value as ResolvedOptions<OptionsConfig[K]>
}

export function getOverrides<K extends keyof OptionsConfig>(
  options: OptionsConfig,
  key: K,
): Partial<Linter.RulesRecord> {
  const value = resolveSubOptions(options, key)
  if (!value) {
    return {}
  }
  return (value as any).overrides || {}
}
 