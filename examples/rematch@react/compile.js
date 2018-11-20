const webpack = require('webpack')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const webpackConfig = require('./webpack.prod.config')
const ora = require('ora')

const isDebug = !process.argv.includes('--release')
const isVerbose = process.argv.includes('--verbose')
const statsOpts = {
  cached: isVerbose,
  cachedAssets: isVerbose,
  chunks: isVerbose,
  chunkModules: isVerbose,
  colors: true,
  hash: isVerbose,
  modules: isVerbose,
  reasons: isDebug,
  timings: true,
  version: isVerbose,
}

return new Promise((resolve, reject) => {
  let compiler = webpack(webpackConfig)
  let lastPercentage = 0
  let spinner = ora('Starting compile ...\n').start()
  compiler.apply(new ProgressPlugin((percentage, msg) => {
    percentage = Math.round(percentage * 10000) / 100
    if (/building modules/.test(msg) && percentage - lastPercentage < 8) {
      return
    }
    lastPercentage = percentage
    spinner.text = `${percentage}% ${msg}`
    percentage === 100 && spinner.succeed('Succeed!\n')
  }))
  compiler.run((err, stats) => {
    if (err) {
      return reject(err)
    }
    console.info(stats.toString(statsOpts), '\n')
    if (stats.hasErrors()) {
      return reject(new Error('Webpack compilation errors'))
    }
    return resolve()
  })
})