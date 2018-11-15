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
      'vue',
      'vue-router',
      'vuex'
    ],
  },
  manifest: 'dll/[name]-manifest.json',
  alias: {
    'vue': 'vue/dist/vue.js'
  },
  htmlplugins: ['initialize.browser.js', 'initialize.browser.css'],
  copys: [
    { from: 'utils/initialize/browser.js', to: 'initialize.browser.js' },
    { from: 'utils/initialize/browser.css', to: 'initialize.browser.css' },
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