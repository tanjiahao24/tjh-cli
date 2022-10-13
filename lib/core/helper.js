
const helper = (program) => {
  program.option('-d --dest <dest>', 'a destination folder, 例如：-d /src/pages')
       .requiredOption('-f --framework <framework>', 'cheese your framework, 例如：-f vue')
}

exports.helper = helper