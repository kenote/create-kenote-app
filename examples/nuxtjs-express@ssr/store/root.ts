import { GetterTree, ActionContext, ActionTree, MutationTree } from 'vuex'
import { RootState } from 'store'
import { Request } from 'express'

export const types = {}

export interface State {}

export const state = (): State => ({})

export const getters: GetterTree<State, RootState> = {}

export interface Actions<S, R> extends ActionTree<S, R> {
  nuxtServerInit(context: ActionContext<S, R>, server: HTTPServer): void
}

interface HTTPServer {
  req: Request
}

export const actions: Actions<State, RootState> = {
  nuxtServerInit({ commit }, { req }) {
    console.log(req.method, req.body, req.params, req.query)
  }
}

export const mutations: MutationTree<State> = {}
