import React from 'react'
import Screen from './screen'
import Team from './team'

const routes = {
  path: '/about',
  name: '关于',
  routes: [
    {
      path: 'default', 
      name: '关于', 
      component: Screen, 
      isIndex: true,
    },
    {
      path: 'team',
      name: '团队',
      component: Team
    }
  ]
}

export default routes