import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import nextReducer from './reducer'
import nextInitialState, { nextState } from './state'

export const initStore = (initialState: nextState = nextInitialState) => {
  return createStore(nextReducer, initialState as any, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}