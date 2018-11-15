const path = require('path')
const fs = require('fs-extra')
const ora = require('ora')
const project = require('./project.config')

const assetsDir = path.resolve(project.assetsDir)
const assets = fs.readdirSync(assetsDir).filter( t => !/\.(js)$/.test(t))

for (let dir of assets) {
  let spinner = ora(`Starting update ${dir} for assets ...`).start()
  updateAssets(dir)
  spinner.succeed(`Succeed update ${dir} for assets ...`)
}

function updateAssets (dirname) {
  let rootDir = path.resolve(assetsDir, dirname)
  let files = fs.readdirSync(rootDir).filter( t => !/\.(js)$/.test(t))
  let exportStr = `// assets --> ${dirname}`
  for (let item of files) {
    let name = nameToHump(item.replace(/\.(gif|png|jpg|jpeg|json)$/, ''))
    exportStr = exportStr.concat(`\n`, `export { default as ${name} } from './${item}'`)
  }
  fs.writeFileSync(path.resolve(rootDir, 'index.js'), exportStr, 'utf-8')
}

function nameToHump (str) {
  return str.replace(/(\-|\_)(\w)/g, x => x.slice(1).toUpperCase())
}