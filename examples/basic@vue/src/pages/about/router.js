import Index from './index.vue'
import Team from './team.vue'

export default {
  path: '/about',
    component: Index,
    children: [
      {
        path: 'team',
        component: Team
      }
    ]
}