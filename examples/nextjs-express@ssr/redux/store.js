import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import nextReducer from './reducer'
import nextInitialState from './state'

export const initStore = (initialState = nextInitialState) => {
  return createStore(nextReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}