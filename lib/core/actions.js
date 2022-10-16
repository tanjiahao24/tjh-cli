
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
const open = require('open')
const inquirer = require('inquirer')
const { commandSpawn } = require('../utils/terminal')
const configs = require('../config/frameworkConfig')
const frameworkTypes = require('../config/frameworkTypes')

const createProjectAction = async (project) => {

  const prompt = inquirer.createPromptModule();
  const { framework } = await prompt({
    type: 'list',
    name: 'framework',
    choices: frameworkTypes
  })

  let { type, repo, command, install, run, url} = configs[framework]

  console.log(`正在为您创建 ${framework} 项目·······`)


  // 处理 window 兼容性
  command = process.platform === 'win32' ? command + '.cmd' : command
  // 下载模板
  try {
    await download(repo, project, { clone: true })
  } catch(e) {
    // 可以对出错做一些处理
    // console.log('---------', e)
    console.log('git clone 的时候出错了，请重新创建~~~~~')
  }
  

  // 执行 install
  try {
    await commandSpawn(command, install, { cwd: `./${project}`})
  } catch (e) {
    console.log('npm install 的时候出错了，请手动执行 npm install~~~~~~~')
  }
  

  // 将项目 run 起来
  commandSpawn(command, run, { cwd: `./${project}`})

  // 打开浏览器
  // if (type === 'client') {
  //   open(url)
  // }
  
}

module.exports = {
  createProjectAction
}