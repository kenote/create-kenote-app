import path from 'path'
import program from 'commander'
import isEmpty from 'lodash/isEmpty'
import { version } from '../package.json'
import Utils from './utils'

const basename = path.basename(process.env._ || process.title.replace(/^(\S+)(\s\-\s)(\S+)$/, '$3'))

program
  .version(version, '-v, --version')
  .name(basename === 'node' ? 'create-kenote-app' : basename)
  .usage('[Command] [Options]')

program
  .command('list')
  .alias('ls')
  .option('--type <type-name>', 'Only relevant types are displayed', /^(react|vue|ssr)$/i, null)
  .description('display boilerplate list.')
  .action( () => {
    Utils.showExamples(program.args[0].type)
  })

program
  .command('add <project-name>')
  .option('--type <type-name>', 'Only relevant types are displayed', /^(react|vue|ssr)$/i, null)
  .description('install boilerplate to project.')
  .action( (name) => {
    Utils.install(name, program.args[1].type)
  })


// Parse and fallback to help if no args
if (isEmpty(program.parse(process.argv).args) && process.argv.length === 2) {
  program.help()
}
