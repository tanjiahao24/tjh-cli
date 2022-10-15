

const { createProjectAction } = require('./actions')


const createCommands = (program) => {

  program.command('create <project>')
    .description('clone a project')
    .action(createProjectAction)

}

module.exports = {
  createCommands
}