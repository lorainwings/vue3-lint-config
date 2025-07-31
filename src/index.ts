import { hhfe } from './factory'

export * from './configs'
export * from './globs'
export * from './types'
export { hhfe, HHFEConfig } from './factory'
export { interopDefault, isInEditorEnv, toArray, renameRules } from './utils'

// 主要的一键式配置函数
export function defineLintConfig(options: any = {}) {
  return hhfe(options)
}

export default hhfe
 