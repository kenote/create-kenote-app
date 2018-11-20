// ------------------------------------
// Project Config File
// ------------------------------------
module.exports = {
  srcDir: 'src',
  outDir: 'dist',
  assetsDir: 'src/assets',
  publicPath: '',
  devPort: 9000,
  entry: {
    index: './index.js'
  },
  vendors: {
    vendor0: [
      'babel-polyfill',
      'react-hot-loader',
      'react',
      'react-dom',
      'prop-types',
    ],
    vendor1: [
      'redux',
      'react-redux',
      '@reach/router',
      '@rematch/core',
      'hash-source',
      'kenote-react-utils'
    ]
  },
  manifest: 'dll/[name]-manifest.json',
  alias: {
    
  },
  htmlplugins: ['initialize.browser.js', 'initialize.browser.css'],
  copys: [
    { from: 'kenote-react-utils/dist/initialize/browser.js', to: 'initialize.browser.js', context: '../node_modules/' },
    { from: 'kenote-react-utils/dist/initialize/browser.css', to: 'initialize.browser.css', context: '../node_modules/' },
  ],
  environment: {
    api: {
      domain: 'http://localhost:4000', 
      apiPath: '/api/v1'
    },
  },
  globals: {
    __DESKTOP__: true,
    __INITIALIZE__: JSON.stringify({
      animation: 'hideMask 1.8s',
      waitimes: 1500
    })
  }
}