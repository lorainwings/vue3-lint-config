export function interopDefault<T>(module: T): T extends { default: infer U } ? U : T {
  return module as any
}

export function isInEditorEnv(): boolean {
  return !!(process.env.VSCODE_PID || process.env.JETBRAINS_IDE || process.env.VIM || process.env.NVIM)
}

export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}

export function resolveSubOptions<K extends keyof any>(
  options: Record<K, any>,
  key: K,
): any {
  const value = options[key]
  if (value === true) {
    return {}
  }
  if (value === false) {
    return null
  }
  return value
}

export function getOverrides<K extends keyof any>(
  options: Record<K, any>,
  key: K,
): Record<string, any> {
  const value = resolveSubOptions(options, key)
  if (!value) {
    return {}
  }
  return value.overrides || {}
}

export function renameRules(rules: Record<string, any>, from: string, to: string): Record<string, any> {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => [
      key.replace(new RegExp(`^${from}/`), `${to}/`),
      value,
    ]),
  )
}
 
/**
 * 检测项目是否已经安装了必要的依赖
 */
export async function checkDependencies(): Promise<{ missing: string[], installed: string[] }> {
  const required = ['eslint', 'stylelint', 'prettier', '@commitlint/cli', 'lint-staged']
  const missing: string[] = []
  const installed: string[] = []

  try {
    const fs = await import('fs')
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))
    const deps = { ...pkg.dependencies, ...pkg.devDependencies }

    required.forEach(dep => {
      if (deps[dep]) {
        installed.push(dep)
      } else {
        missing.push(dep)
      }
    })
  } catch {
    // 如果无法读取 package.json，假设所有依赖都缺失
    missing.push(...required)
  }

  return { missing, installed }
}

/**
 * 验证配置文件的正确性
 */
export function validateConfig(config: any): { valid: boolean, errors: string[] } {
  const errors: string[] = []

  if (!config) {
    errors.push('配置对象不能为空')
    return { valid: false, errors }
  }

  // 检查必要的配置项
  if (config.eslint && typeof config.eslint !== 'object' && config.eslint !== true) {
    errors.push('ESLint 配置必须是对象或 true')
  }

  if (config.stylelint && typeof config.stylelint !== 'object' && config.stylelint !== true) {
    errors.push('Stylelint 配置必须是对象或 true')
  }

  return { valid: errors.length === 0, errors }
}

/**
 * 生成配置文件模板
 */
export function generateConfigTemplate(type: 'basic' | 'advanced' = 'basic'): string {
  if (type === 'basic') {
    return `import { defineLintConfig } from '@hhfe/vue3-lint-config'

export default defineLintConfig({
  eslint: true,
  stylelint: true,
  prettier: true,
  commitlint: true,
  lintStaged: true,
})`
  }

  return `import { defineLintConfig } from '@hhfe/vue3-lint-config'

export default defineLintConfig({
  eslint: {
    vue: true,
    typescript: true,
  },
  stylelint: {
    scss: true,
    vue: true,
    order: true,
    prettier: true,
  },
  prettier: {
    semi: false,
    singleQuote: true,
    tabWidth: 2,
  },
  commitlint: {
    conventional: true,
  },
  lintStaged: {
    eslint: true,
    stylelint: true,
    prettier: true,
  },
})`
}
 