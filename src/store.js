import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const time = {
  namespaced: true,
  state: {now: new Date},
  actions: {start({commit}) {setInterval(() => {commit('refresh')}, 60000)}},
  mutations: {refresh(state) {state.now = new Date}}
}

export default new Vuex.Store({modules: {time}})
