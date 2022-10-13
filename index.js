#!/usr/bin/env node
const { Command  } = require('commander')
const { helper } = require('./lib/core/helper')
const { createCommands } = require('./lib/core/create')


// 创建处理程序
const program = new Command()

// -V --version 查看版本号
program.version(require('./package.json').version)

// 增加 options
helper(program)

// 增加 commands
createCommands(program)

// 解析指令
program.parse(process.argv)
