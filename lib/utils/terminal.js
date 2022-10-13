


const { spawn } = require('child_process')

const commandSpawn = (...args) => {

  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args)
    // 打印信息
    childProcess.stdout.pipe(process.stdout)
    childProcess.stderr.pipe(process.stderr)
    // 监听结束
    childProcess.on('close', () => {
      resolve()
    })
  })

}

module.exports = {
  commandSpawn
}