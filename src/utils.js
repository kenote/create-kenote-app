import path from 'path'
import fs from 'fs-extra'
import pick from 'lodash/pick'
import filter from 'lodash/filter'
import find from 'lodash/find'
import Table from 'tty-table'
import inquirer from 'inquirer'
import map from 'lodash/map'
import ora from 'ora'
import runscript from 'runscript'
import chalk from 'chalk'

const examplesDir = path.resolve(process.mainModule.filename, '../../', 'examples')
const tableStyle = {
  borderStyle : 2,
  paddingBottom : 0,
  headerAlign : "center",
  align : "center",
  color : "white",
  truncate: "..."
}
const bodyHeader = [
  {
    value: 'Name',
    align: 'center',
    width: 30,
    paddingLeft: 2
  },
  {
    value: 'Version',
    align: 'center',
    width: 15,
    paddingLeft: 2
  },
  {
    value: 'Type',
    align: 'center',
    width: 15,
    paddingLeft: 2
  },
  {
    value: 'Description',
    align: 'left',
    width: 80,
    paddingLeft: 2
  }
]

class Utils {

  getExamples (type = null) {
    let files = fs.readdirSync(examplesDir)
    let examples = []
    for (let item of files) {
      let file = path.resolve(examplesDir, item)
      let fileStat = fs.statSync(file)
      if (!fileStat.isDirectory()) continue
      let pkgFile = path.resolve(file, 'package.json')
      if (!fs.existsSync(pkgFile)) continue
      let pkg = pick(fs.readJsonSync(pkgFile, 'utf-8'), ['name', 'version', 'description', 'dependencies'])
      pkg.type = /[^\@]+$/.exec(item)[0]
      pkg.dir = path.resolve(examplesDir, item)
      examples.push(pkg)
    }
    return type ? filter(examples, { type: type.toLowerCase() }) : examples
  }

  showExamples (type = null) {
    let bodyer = toBodyer(this.getExamples(type))
    let t3 = Table(bodyHeader, bodyer, tableStyle)
    console.log(t3.render(), '\n')
    process.exit(0)
  }

  async install (name, type = null) {
    let examples = this.getExamples(type)
    console.log('Root:', process.cwd())
    if (map(examples, 'name').length === 0) {
      console.log('')
      console.log('Uh oh! There is no boilerplate under this type.')
      process.exit(1)
    }
    try {
      let options = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Input Project Name ?',
          default: name
        },
        {
          type: 'input',
          name: 'description',
          message: 'Input Description ?'
        },
        {
          type: 'list',
          name: 'example',
          message: 'Please select a example ?',
          choices: map(examples, 'name')
        }
      ])
      let example = find(examples, o => o.name === options.example)
      let projrctDir = path.resolve(process.cwd(), options.name)
      if (fs.existsSync(projrctDir)) {
        console.log('')
        console.log(`Uh oh! Looks like there's already a directory called ${chalk.red(options.name)}. Please try a different name or delete that folder.`)
        process.exit(1)
      }
      console.log('')
      console.log(`Creating a new ${example.type} app in ${chalk.green(projrctDir)}.`)
      // copy example ...
      fs.copySync(example.dir, projrctDir)
      let pkg = fs.readJsonSync(path.resolve(projrctDir, 'package.json'), 'utf-8')
      pkg.name = options.name
      pkg.description = options.description
      fs.writeFileSync(path.resolve(projrctDir, 'package.json'), JSON.stringify(pkg, null, 2), 'utf-8')
      console.log('')
      console.log('Installing packages. This might take a couple of minutes.')
      console.log('')
      for (let item of Object.keys(pkg.dependencies)) {
        console.log(`    ${chalk.blue(item)}`)
      }
      console.log('')
      let spinner = ora(`    Installing npm modules ...`).start()
      await runscript(`cd ${options.name} && yarn install`)
      setTimeout(() => {
        spinner.stop()
        console.log('')
        console.log(`${chalk.green('✔   Success')} Installing npm modules !\n`)
        console.log('')
        console.log(`${chalk.green('Awesome!')} You\'re now ready to start coding.`)
        console.log('')
        console.log('We suggest that you begin by typing:')
        console.log('')
        console.log(`  ${chalk.blue('cd')} ${options.name}`)
        console.log('')
        console.log('Happy hacking!')
      }, 500)
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  }
}

const toBodyer = (data) => {
  let dataList = []
  for (let item of data) {
    dataList.push([
      item.name || '--',
      item.version || '--',
      item.type || '--',
      item.description  || '--'
    ])
  }
  return dataList
}

export default new Utils()