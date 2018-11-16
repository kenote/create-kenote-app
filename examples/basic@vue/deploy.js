/**
 * Deploy -- 服务器部署
 */
const client = require('kenote-deploy-kit')
const Deploy = require('./deploy.config')
const zipObject = require('lodash/zipObject')

const { target } = zipObject([,,'target'], process.argv)
const Options = Deploy[target]

if (!Options) {
  console.log(`No configuration found.`)
  process.exit(0)
}
console.log(`Concent to the Server ==> ${Options.name}`)
var ftpType = Object.keys(Options).find( o => /(ftp)$/.test(o) )
client[ftpType](Options.sftp).exec()