module.exports = {
  Vue: {
    type: 'client',
    repo: 'direct:https://github.com/AbaAba01/vue-temp.git',
    install: ['install'],
    run: ['run', 'dev'],
    command: 'npm',
    url: 'http://localhost:8080/'
  },
  React: {
    type: 'client',
    repo: 'direct:https://github.com/AbaAba01/vue-temp.git',
    install: ['install'],
    run: ['run', 'serve'],
    command: 'npm',
    url: 'http://localhost:8080/'
  },
  Koa: {
    type: 'serve',
    repo: 'direct:https://github.com/AbaAba01/vue-temp.git',
    install: ['install'],
    run: ['run', 'serve'],
    command: 'npm',
    url: 'http://localhost:8080/'
  },
  Express: {
    type: 'serve',
    repo: 'direct:https://github.com/AbaAba01/vue-temp.git',
    install: ['install'],
    run: ['run', 'serve'],
    command: 'npm',
    url: 'http://localhost:8080/'
  },
  Nest: {
    type: 'serve',
    repo: 'direct:https://github.com/AbaAba01/vue-temp.git',
    install: ['install'],
    run: ['run', 'serve'],
    command: 'npm',
    url: 'http://localhost:8080/'
  }
}