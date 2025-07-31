#!/usr/bin/env node

import { checkDependencies, generateConfigTemplate } from '../utils'

async function main() {
  const args = process.argv.slice(2)
  const command = args[0]

  if (command === 'init') {
    const type = args.includes('--advanced') ? 'advanced' : 'basic'
    
    try {
      console.log('🔍 检查项目依赖...')
      const deps = await checkDependencies()
      
      if (deps.missing.length > 0) {
        console.log('⚠️  缺少以下依赖:')
        deps.missing.forEach(dep => console.log(`  - ${dep}`))
        console.log('\n请运行以下命令安装依赖:')
        console.log(`pnpm add -D ${deps.missing.join(' ')}`)
        console.log('\n')
      }

      const template = generateConfigTemplate(type)
      
      console.log('📝 生成的配置文件:')
      console.log(template)
      
      console.log('\n✅ 配置生成完成！')
      console.log('请将上述内容保存到 lint.config.js 文件中')
      
    } catch (error) {
      console.error('❌ 初始化失败:', error)
      process.exit(1)
    }
  } else if (command === 'check') {
    try {
      console.log('🔍 检查项目配置...')
      
      const deps = await checkDependencies()
      console.log('\n📦 依赖状态:')
      console.log(`已安装: ${deps.installed.join(', ') || '无'}`)
      console.log(`缺失: ${deps.missing.join(', ') || '无'}`)

      console.log('\n✅ 检查完成！')
      
    } catch (error) {
      console.error('❌ 检查失败:', error)
      process.exit(1)
    }
  } else {
    console.log('HHFE Vue3 Lint Config CLI')
    console.log('\n可用命令:')
    console.log('  init         初始化 lint 配置文件')
    console.log('  init --advanced 生成高级配置')
    console.log('  check        检查当前配置')
  }
}

main().catch(console.error)
 