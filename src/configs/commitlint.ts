import type { CommitlintConfig } from '../types'

export interface CommitlintConfigOptions {
  conventional?: boolean
  customRules?: Record<string, any>
}

export function createCommitlintConfig(options: CommitlintConfigOptions = {}): CommitlintConfig {
  const config: CommitlintConfig = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          'feat',
          'fix',
          'docs',
          'style',
          'refactor',
          'perf',
          'test',
          'build',
          'ci',
          'chore',
          'revert',
          'wip',
          'workflow',
          'types',
          'release',
        ],
      ],
      'type-case': [2, 'always', 'lower-case'],
      'type-empty': [2, 'never'],
      'subject-case': [2, 'always', 'lower-case'],
      'subject-empty': [2, 'never'],
      'subject-full-stop': [2, 'never', '.'],
      'header-max-length': [2, 'always', 72],
      'body-leading-blank': [2, 'always'],
      'footer-leading-blank': [2, 'always'],
    },
  }

  // Add custom rules if provided
  if (options.customRules) {
    config.rules = {
      ...config.rules,
      ...options.customRules,
    }
  }

  return config
}

/**
 * Define Commitlint configuration with HHFE defaults
 * @param options User options to override defaults
 * @returns Commitlint configuration object
 */
export function defineCommitlintConfig(options: CommitlintConfigOptions = {}): CommitlintConfig {
  return createCommitlintConfig(options)
}
