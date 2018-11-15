import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import routes from './pages/router'
import store from './store'
import InitializeComponent from './utils/initialize/component.vue'
import CoreLayout from './core-layout.vue'

Vue.use(VueRouter)

Vue.component('initialize-component', InitializeComponent)
Vue.component('core-layout', CoreLayout)

window.start = () => {
  new Vue({
    //el: '#root',
    router: new VueRouter({ 
      routes,
      mode: __DESKTOP__ ? 'hash' : 'history'
    }),
    store,
    render: (h) => h(App)
  }).$mount('#root')
}