
import Home from './home.vue'
import PageNotFound from './page-not-found.vue'
import aboutRouter from './about/router'

export default [
  {
    path: '/',
    component: Home
  },
  aboutRouter,
  {
    path: '*',
    component: PageNotFound
  }
]