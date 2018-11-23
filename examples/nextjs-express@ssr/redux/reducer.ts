
import { NEXT_PAGE_CLICK } from './action'
import nextInitialState, { nextState } from './state'

interface nextAction {
  type: string
  payload: object | any[] | string | null
}

export default (state: nextState = nextInitialState, action: nextAction) => {
  let handlers = {
    [NEXT_PAGE_CLICK]: (state: nextState, action: nextAction) => {
      let name: string = action.payload as string
      state[name] ++
      return {
        ...state
      }
    }
  }
  let handler: Function = handlers[action.type]
  return handler ? handler(state, action) : state
}