const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')

const { ANALYZE, ASSET_HOST } = process.env
const assetPrefix = ASSET_HOST || ''

module.exports = withImages(
  withSass(
    withTypescript(
      {
        assetPrefix,
        webpack: (config, { dev }) => {
          config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

          return config
        }
      }
    )
  )
)