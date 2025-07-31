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

/**
 * 自动检测并加载配置文件
 */
export async function autoLoadConfig(): Promise<HHFEConfig> {
  const configFiles = [
    'lint.config.js',
    'lint.config.ts',
    'eslint.config.js',
    'eslint.config.ts',
    'stylelint.config.js',
    'stylelint.config.ts',
    'prettier.config.js',
    'prettier.config.ts',
    'commitlint.config.js',
    'commitlint.config.ts',
    'lint-staged.config.js',
    'lint-staged.config.ts'
  ]

  for (const file of configFiles) {
    try {
      const fs = await import('fs')
      
      if (fs.existsSync(file)) {
        console.log(`📁 检测到配置文件: ${file}`)
        
        // 这里应该动态导入配置文件
        // 由于动态导入的复杂性，这里先返回默认配置
        if (file.startsWith('lint.config')) {
          return hhfe({
            eslint: true,
            stylelint: true,
            prettier: true,
            commitlint: true,
            lintStaged: true,
          })
        }
      }
    } catch {
      // 忽略文件读取错误
    }
  }

  // 如果没有检测到配置文件，返回默认配置
  console.log('⚠️  未检测到配置文件，使用默认配置')
  return hhfe({
    eslint: true,
    stylelint: true,
    prettier: true,
    commitlint: true,
    lintStaged: true,
  })
}

/**
 * 验证配置的有效性
 */
export function validateHHFEConfig(config: HHFEConfig): { valid: boolean, errors: string[] } {
  const errors: string[] = []

  if (!config) {
    errors.push('配置对象不能为空')
    return { valid: false, errors }
  }

  // 检查 ESLint 配置
  if (config.eslint && !Array.isArray(config.eslint)) {
    errors.push('ESLint 配置必须是数组格式')
  }

  // 检查 Stylelint 配置
  if (config.stylelint && typeof config.stylelint !== 'object') {
    errors.push('Stylelint 配置必须是对象格式')
  }

  // 检查 Prettier 配置
  if (config.prettier && typeof config.prettier !== 'object') {
    errors.push('Prettier 配置必须是对象格式')
  }

  return { valid: errors.length === 0, errors }
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
 