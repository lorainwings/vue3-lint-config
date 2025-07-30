# @hhfe/vue3-lint-config

[![npm](https://img.shields.io/npm/v/@hhfe/vue3-lint-config?color=444&label=)](https://npmjs.com/package/@hhfe/vue3-lint-config)

HHFE Vue3 项目的 ESLint、Stylelint、Prettier、Commitlint 和 Lint-staged 配置集合。

## 特性

- 🚀 开箱即用的 Vue3 + TypeScript 配置
- 🎨 自动格式化（无需 Prettier）
- 📦 支持 SCSS、Less、Stylus 等样式文件
- 🔧 合理的默认配置，最佳实践
- 🎯 针对 Vue3 项目优化的规则
- 📝 完整的 Git 提交规范
- ⚡ 基于 ESLint Flat Config，易于组合
- 🛠️ 支持多种工具链集成

## 安装

```bash
pnpm add -D @hhfe/vue3-lint-config
```

## 使用方法

### 推荐：分别在各自配置文件中按需引入

#### 1. ESLint

```js
// eslint.config.js
import { defineEslintConfig } from '@hhfe/vue3-lint-config/eslint'

export default defineEslintConfig({
  rules: {
    'no-console': 'off', // 覆盖默认规则
  },
  // 你也可以传递 plugins、extends、overrides 等
})
```

#### 2. Stylelint

```js
// stylelint.config.js
import { defineStylelintConfig } from '@hhfe/vue3-lint-config/stylelint'

export default defineStylelintConfig({
  rules: {
    'color-hex-case': 'upper', // 覆盖默认规则
  },
  // 你也可以传递 extends、plugins、overrides 等
})
```

#### 3. Prettier

```js
// prettier.config.js
import { definePrettierConfig } from '@hhfe/vue3-lint-config/prettier'

export default definePrettierConfig({
  semi: true, // 覆盖默认规则
})
```

#### 4. Commitlint

```js
// commitlint.config.js
import { defineCommitlintConfig } from '@hhfe/vue3-lint-config/commitlint'

export default defineCommitlintConfig({
  rules: {
    'header-max-length': [2, 'always', 100],
  },
})
```

#### 5. Lint-staged

```js
// lint-staged.config.js
import { defineLintStagedConfig } from '@hhfe/vue3-lint-config/lint-staged'

export default defineLintStagedConfig({
  '*.js': ['eslint --fix'],
  '*.css': ['stylelint --fix'],
})
```

### 一键全量配置（适合 monorepo 或统一管理）

```js
// lint.config.js
import { defineLintConfig } from '@hhfe/vue3-lint-config'

export default defineLintConfig({
  eslint: {
    rules: {
      'no-console': 'off',
    },
  },
  stylelint: {
    rules: {
      'color-hex-case': 'upper',
    },
  },
  prettier: {
    semi: true,
  },
  commitlint: {
    rules: {
      'header-max-length': [2, 'always', 100],
    },
  },
  lintStaged: {
    '*.js': ['eslint --fix'],
    '*.css': ['stylelint --fix'],
  },
})
```

---

## 配置说明

### ESLint 配置

基于 `@antfu/eslint-config`，针对 Vue3 项目进行了优化：

- Vue3 语法支持
- TypeScript 严格模式
- 导入排序和循环检测
- 代码风格统一
- 最佳实践规则

### Stylelint 配置

支持多种样式文件格式：

- SCSS/Sass
- Less
- Stylus
- CSS
- Vue 单文件组件样式

特性：

- 属性排序
- 选择器命名规范
- 兼容性前缀处理
- 与 Prettier 集成

### Prettier 配置

统一的代码格式化规则：

- 单引号
- 无分号
- 2 空格缩进
- 尾随逗号
- 行宽限制

### Commitlint 配置

基于 Conventional Commits 规范：

- 类型枚举：feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
- 大小写规范
- 长度限制
- 自定义规则支持

### Lint-staged 配置

Git 提交前的代码检查：

- 自动修复 ESLint 问题
- 自动格式化样式文件
- 统一代码风格

## 脚本配置

在 `package.json` 中添加以下脚本：

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "stylelint": "stylelint \"**/*.{vue,less,postcss,css,scss}\"",
    "stylelint:fix": "stylelint \"**/*.{vue,less,postcss,css,scss}\" --fix",
    "prettier": "prettier --check .",
    "prettier:fix": "prettier --write .",
    "lint:all": "npm run lint:fix && npm run stylelint:fix && npm run prettier:fix"
  }
}
```

## Git Hooks 配置

使用 `simple-git-hooks` 和 `lint-staged`：

```json
{
  "simple-git-hooks": {
    "pre-commit": "npx lint-staged"
  },
  "lint-staged": {
    "*": "eslint --fix"
  }
}
```

## 依赖要求

### 必需依赖

```bash
pnpm add -D eslint stylelint prettier @commitlint/cli lint-staged
```

### 可选依赖

```bash
pnpm add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
pnpm add -D eslint-plugin-vue vue-eslint-parser
pnpm add -D stylelint-config-standard stylelint-config-recess-order
pnpm add -D stylelint-config-recommended-scss stylelint-config-recommended-vue
pnpm add -D stylelint-scss stylelint-order
pnpm add -D @commitlint/config-conventional
pnpm add -D simple-git-hooks
```

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 更新日志

### v1.0.0

- 初始版本发布
- 支持 Vue3 + TypeScript
- 集成 ESLint、Stylelint、Prettier、Commitlint、Lint-staged
- 基于 ESLint Flat Config 架构
