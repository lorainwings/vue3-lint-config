import type { LintStagedConfig } from '../types'

export interface LintStagedConfigOptions {
  eslint?: boolean
  stylelint?: boolean
  prettier?: boolean
}

export function createLintStagedConfig(options: LintStagedConfigOptions = {}): LintStagedConfig {
  const config: LintStagedConfig = {}

  // ESLint for JavaScript/TypeScript files
  if (options.eslint !== false) {
    config['*.{js,jsx,ts,tsx,vue}'] = ['eslint --fix']
  }

  // Vue files need both ESLint and Stylelint
  if (options.eslint !== false && options.stylelint !== false) {
    config['*.vue'] = ['eslint --fix', 'stylelint --fix']
  }

  // Stylelint for style files
  if (options.stylelint !== false) {
    config['*.{scss,less,css,stylus,styl}'] = ['stylelint --fix']
  }

  // Prettier for all supported files
  if (options.prettier !== false) {
    config['*.{js,jsx,ts,tsx,vue,css,scss,less,md,json}'] = ['prettier --write']
  }

  return config
}
