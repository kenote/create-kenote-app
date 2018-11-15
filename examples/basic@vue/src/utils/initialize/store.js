
export const initializeState = {
  initialize: {
    pending: true,
    progress: 15
  }
}

export const initializeMutations = {
  ['@@initialze/PENDING'] (state, payload) {
    state.initialize = {
      ...state.initialize,
      progress: payload.pending
    }
  },
  ['@@initialze/COMPLETE'] (state, payload) {
    state.initialize = {
      ...state.initialize,
      pending: false
    }
  },
}

export const initializeActions = {
  initialProgress ({ commit }, { pending, times = 300 }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('@@initialze/PENDING', { pending })
        resolve()
      }, times)
    })
  },
  initialComplete ({ commit }, { times = 500 }) {
    //return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('@@initialze/COMPLETE')
        //resolve()
      }, times)
    //})
  }
}