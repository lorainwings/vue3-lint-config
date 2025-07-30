#!/usr/bin/env node

import { hhfe } from '../factory'

console.log('HHFE Vue3 Lint Config CLI')

const config = hhfe({
  eslint: true,
  stylelint: true,
  prettier: true,
  commitlint: true,
  lintStaged: true,
})

console.log('Configuration generated:', JSON.stringify(config, null, 2))
 