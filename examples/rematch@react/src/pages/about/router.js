import Screen from './'
import Team from './team'
import { renderRouteConfig } from '../../utils'

export default () => renderRouteConfig([
  {
    path: '/',
    component: Screen
  },
  {
    path: 'team',
    component: Team
  }
])