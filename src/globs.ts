export const GLOB_EXCLUDE = [
  '**/node_modules',
  '**/dist',
  '**/coverage',
  '**/.git',
  '**/.svn',
  '**/.hg',
  '**/.bzr',
  '**/.DS_Store',
  '**/Thumbs.db',
]

export const GLOB_JS = ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}']
export const GLOB_TS = ['**/*.{ts,tsx,mtsx}']
export const GLOB_JSX = ['**/*.{jsx,tsx,mjsx,mtsx}']
export const GLOB_TSX = ['**/*.{tsx,mtsx}']

export const GLOB_VUE = ['**/*.vue']
export const GLOB_VUE_SCRIPT = ['**/*.vue']

export const GLOB_SVELTE = ['**/*.svelte']

export const GLOB_MARKDOWN = ['**/*.md']
export const GLOB_MARKDOWN_IN_MARKDOWN = ['**/*.md/*.md']

export const GLOB_YAML = ['**/*.{yml,yaml}']
export const GLOB_TOML = ['**/*.toml']
export const GLOB_JSON = ['**/*.json']
export const GLOB_JSONC = ['**/*.jsonc']
export const GLOB_JSON5 = ['**/*.json5']

export const GLOB_ASTRO = ['**/*.astro']

export const GLOB_SRC = [
  ...GLOB_JS,
  ...GLOB_TS,
  ...GLOB_VUE,
  ...GLOB_SVELTE,
  ...GLOB_ASTRO,
]

export const GLOB_STYLE = [
  '**/*.{css,scss,sass,less,styl,stylus,pcss,sss}',
  ...GLOB_VUE,
  ...GLOB_SVELTE,
  ...GLOB_ASTRO,
]

export const GLOB_CSS = ['**/*.{css,scss,sass,less,styl,stylus,pcss,sss}']
export const GLOB_SCSS = ['**/*.{scss,sass}']
export const GLOB_LESS = ['**/*.less']
export const GLOB_STYLUS = ['**/*.{styl,stylus}']

export const GLOB_HTML = ['**/*.{html,htm}']
export const GLOB_XML = ['**/*.{xml,xmlx}']
export const GLOB_XML_IN_MARKDOWN = ['**/*.md/*.{xml,xmlx}']

export const GLOB_LOCKFILE = [
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',
  '**/bun.lockb',
]

export const GLOB_WORKSPACE = [
  '{apps,packages,libs,test,tests,tmp,temp,types,typings}/**',
]

export const GLOB_CONFIG = [
  '**/*.config.{js,ts,mjs,cjs}',
  '**/*.config.*.{js,ts,mjs,cjs}',
  '**/.*rc.{js,ts,mjs,cjs}',
  '**/.*rc.*.{js,ts,mjs,cjs}',
]

export const GLOB_TEST = [
  '**/*.{test,spec}.{js,ts,jsx,tsx,mjs,mts,mjsx,mtsx}',
  '**/*.{test,spec}.*.{js,ts,jsx,tsx,mjs,mts,mjsx,mtsx}',
  '**/test/**/*.{js,ts,jsx,tsx,mjs,mts,mjsx,mtsx}',
  '**/tests/**/*.{js,ts,jsx,tsx,mjs,mts,mjsx,mtsx}',
  '**/__tests__/**/*.{js,ts,jsx,tsx,mjs,mts,mjsx,mtsx}',
  '**/__mocks__/**/*.{js,ts,jsx,tsx,mjs,mts,mjsx,mtsx}',
]
export const GLOB_DTS = ['**/*.d.ts']

export const GLOB_ALL_SRC = [
  ...GLOB_SRC,
  ...GLOB_STYLE,
  ...GLOB_MARKDOWN,
  ...GLOB_YAML,
  ...GLOB_TOML,
  ...GLOB_JSON,
  ...GLOB_JSONC,
  ...GLOB_JSON5,
  ...GLOB_HTML,
  ...GLOB_XML,
]

export const GLOB_ALL = [
  ...GLOB_ALL_SRC,
  ...GLOB_LOCKFILE,
  ...GLOB_CONFIG,
  ...GLOB_DTS,
]

