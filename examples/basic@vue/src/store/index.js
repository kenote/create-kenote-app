import Vue from 'vue'
import Vuex from 'vuex'
import { initializeState, initializeMutations, initializeActions } from '../utils/initialize/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...initializeState
  },
  mutations: {
    ...initializeMutations
  },
  actions: {
    ...initializeActions
  }
})