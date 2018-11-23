const nextRoutes = require('next-routes')
const routes = nextRoutes()

type Route = {
  name?: string
  page: string
  pattern: string | RegExp
}

const APP_ROUTES: Array<Route> = [
  {
    name: 'home',
    page: 'index',
    pattern: '/'
  },
  {
    name: 'about',
    page: 'about',
    pattern: '/about'
  },
]
APP_ROUTES.forEach( (route: Route) => routes.add(route) )

export default routes