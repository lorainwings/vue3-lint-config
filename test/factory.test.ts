import { describe, it, expect } from 'vitest'
import { hhfe } from '../src/factory'

describe('hhfe factory', () => {
  it('should create default configuration', () => {
    const config = hhfe()
    expect(config).toBeDefined()
  })

  it('should create ESLint configuration', () => {
    const config = hhfe({ eslint: true })
    expect(config.eslint).toBeDefined()
  })

  it('should create Stylelint configuration', () => {
    const config = hhfe({ stylelint: true })
    expect(config.stylelint).toBeDefined()
  })

  it('should create Prettier configuration', () => {
    const config = hhfe({ prettier: true })
    expect(config.prettier).toBeDefined()
  })

  it('should create Commitlint configuration', () => {
    const config = hhfe({ commitlint: true })
    expect(config.commitlint).toBeDefined()
  })

  it('should create Lint-staged configuration', () => {
    const config = hhfe({ lintStaged: true })
    expect(config.lintStaged).toBeDefined()
  })

  it('should create all configurations', () => {
    const config = hhfe({
      eslint: true,
      stylelint: true,
      prettier: true,
      commitlint: true,
      lintStaged: true,
    })

    expect(config.eslint).toBeDefined()
    expect(config.stylelint).toBeDefined()
    expect(config.prettier).toBeDefined()
    expect(config.commitlint).toBeDefined()
    expect(config.lintStaged).toBeDefined()
  })
})

describe('hhfe factory - config content', () => {
  it('should generate correct ESLint config with vue/ts', () => {
    const config = hhfe({ eslint: { vue: true, typescript: true } })
    expect(config.eslint).toBeDefined()
    if (!config.eslint) throw new Error('eslint config is undefined')
    expect(Array.isArray(config.eslint)).toBe(true)
    // 检查部分规则
    const rules = (config.eslint as any[]).find((c: any) => c.rules)?.rules || {}
    expect(rules).toHaveProperty('vue/v-on-event-hyphenation')
  })

  it('should generate correct Stylelint config with scss/vue/prettier', () => {
    const config = hhfe({ stylelint: { scss: true, vue: true, prettier: true } })
    expect(config.stylelint).toBeDefined()
    expect(config.stylelint).toHaveProperty('extends')
    expect(config.stylelint).toHaveProperty('rules')
    expect(config.stylelint.extends).toContain('stylelint-config-prettier')
  })

  it('should generate correct Prettier config with custom options', () => {
    const config = hhfe({ prettier: { semi: true, singleQuote: false, tabWidth: 4 } })
    expect(config.prettier).toBeDefined()
    expect(config.prettier.semi).toBe(true)
    expect(config.prettier.singleQuote).toBe(false)
    expect(config.prettier.tabWidth).toBe(4)
  })

  it('should generate correct Commitlint config with custom rules', () => {
    const config = hhfe({ commitlint: { customRules: { 'header-max-length': [2, 'always', 100] } } })
    expect(config.commitlint).toBeDefined()
    expect(config.commitlint.rules['header-max-length'][2]).toBe(100)
  })

  it('should generate correct Lint-staged config with all tools', () => {
    const config = hhfe({ lintStaged: { eslint: true, stylelint: true, prettier: true } })
    expect(config.lintStaged).toBeDefined()
    expect(Object.keys(config.lintStaged)).toContain('*.{js,jsx,ts,tsx,vue}')
    expect(Object.keys(config.lintStaged)).toContain('*.{scss,less,css,stylus,styl}')
    expect(Object.keys(config.lintStaged)).toContain('*.{js,jsx,ts,tsx,vue,css,scss,less,md,json}')
  })

  it('should handle disabling tools', () => {
    const config = hhfe({ eslint: false, stylelint: false, prettier: false, commitlint: false, lintStaged: false })
    expect(config.eslint).toBeUndefined()
    expect(config.stylelint).toBeUndefined()
    expect(config.prettier).toBeUndefined()
    expect(config.commitlint).toBeUndefined()
    expect(config.lintStaged).toBeUndefined()
  })

  it('should handle partial options', () => {
    const config = hhfe({ eslint: { vue: false }, stylelint: { scss: false } })
    expect(config.eslint).toBeDefined()
    expect(config.stylelint).toBeDefined()
  })

  it('should not throw on empty options', () => {
    expect(() => hhfe({})).not.toThrow()
  })
})
