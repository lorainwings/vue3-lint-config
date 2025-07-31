# 配置示例

本目录包含了 `@hhfe/vue3-lint-config` 的各种使用方式和配置示例。

## 📁 文件说明

### 一键式配置（推荐）

- **`lint.config.js`** - 完整的一键式配置示例
- **`basic.config.js`** - 基础配置，启用所有工具
- **`advanced.config.js`** - 高级配置，包含详细选项
- **`custom-rules.config.js`** - 自定义规则配置示例

### 独立工具配置

- **`eslint.config.js`** - ESLint 独立配置
- **`stylelint.config.js`** - Stylelint 独立配置
- **`prettier.config.js`** - Prettier 独立配置
- **`commitlint.config.js`** - Commitlint 独立配置
- **`lint-staged.config.js`** - Lint-staged 独立配置

## 🚀 快速开始

### 1. 一键式配置（推荐）

复制 `lint.config.js` 到项目根目录：

```bash
cp examples/lint.config.js ./lint.config.js
```

### 2. 基础配置

如果只需要基础功能，使用 `basic.config.js`：

```bash
cp examples/basic.config.js ./lint.config.js
```

### 3. 独立工具配置

如果需要单独配置某个工具，复制对应的配置文件：

```bash
# ESLint 配置
cp examples/eslint.config.js ./eslint.config.js

# Stylelint 配置
cp examples/stylelint.config.js ./stylelint.config.js

# Prettier 配置
cp examples/prettier.config.js ./prettier.config.js
```

## 📝 配置说明

### 一键式配置的优势

- **简单易用**：一行配置集成所有工具
- **统一管理**：所有配置集中在一个文件中
- **自动优化**：内置最佳实践和优化配置
- **灵活扩展**：支持自定义规则和选项

### 独立配置的优势

- **精确控制**：可以精确控制每个工具的配置
- **按需引入**：只使用需要的工具
- **团队协作**：便于团队理解和维护
- **渐进式采用**：可以逐步添加工具

## 🔧 自定义配置

### 添加自定义规则

```js
import { defineLintConfig } from '@hhfe/vue3-lint-config'

export default defineLintConfig({
  eslint: {
    vue: true,
    typescript: true,
    overrides: {
      'no-console': 'warn',
      'vue/max-attributes-per-line': ['error', { singleline: 3 }],
    },
  },
  // ... 其他配置
})
```

### 忽略特定文件

```js
export default defineLintConfig({
  // ... 其他配置
  ignores: ['dist/', 'node_modules/', '*.d.ts', 'coverage/'],
})
```

### 自定义提交规范

```js
export default defineLintConfig({
  commitlint: {
    conventional: true,
    customRules: {
      'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
    },
  },
})
```

## 📚 更多信息

- 查看 [主 README](../README.md) 了解完整文档
- 查看 [类型定义](../src/types.ts) 了解所有配置选项
- 查看 [配置工厂](../src/factory.ts) 了解配置生成逻辑
