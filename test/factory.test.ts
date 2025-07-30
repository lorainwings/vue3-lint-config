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
