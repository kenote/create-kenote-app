// ------------------------------------
// Project Config File
// ------------------------------------
module.exports = {
  srcDir: 'src',
  outDir: 'dist',
  assetsDir: 'src/assets',
  publicPath: '',
  devPort: 9091,
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
      'redux-logger',
      'redux-thunk',
      'react-router',
      'react-router-dom',
      'react-router-redux',
      'axios',
      'localforage',
    ],
  },
  manifest: 'dll/[name]-manifest.json',
  alias: {
    
  },
  htmlplugins: ['initialize.browser.js', 'initialize.browser.css'],
  copys: [
    { from: 'kenote-react-utils/dist/initialze/browser.js', to: 'initialize.browser.js', context: '../node_modules/' },
    { from: 'kenote-react-utils/dist/initialze/browser.css', to: 'initialize.browser.css', context: '../node_modules/' },
  ],
  environment: {
    api: {
      domain: 'http://localhost:4000', 
      apiPath: '/api/v1'
    },
  },
  globals: {
    __DESKTOP__: false,
    __INITIALIZE__: JSON.stringify({
      animation: 'hideMask 1.8s',
      waitimes: 1500
    })
  }
}