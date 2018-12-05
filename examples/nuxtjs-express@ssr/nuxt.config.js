module.exports = {
  head: {
    title: 'Nuxt.js App',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Loading
  loading: { color: 'rgb(238, 92, 73, .8)', height: '3px' },
  // Css
  css: [
    '~/assets/scss/common.scss'
  ],
  // Modules
  modules: [
    '~/modules/typescript'
  ],
  // Plugins
  plugins: [
    '~/plugins/component'
  ],
  // Router
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
}
