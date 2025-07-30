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
 