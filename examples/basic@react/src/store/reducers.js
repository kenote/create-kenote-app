import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { initializeReducer as initialize } from 'kenote-react-utils/dist/initialze'

export default combineReducers({
  router,
  initialize
})