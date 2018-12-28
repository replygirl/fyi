import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const time = {
  namespaced: true,
  state: {now: new Date},
  mutations: {tick(state) {state.now = new Date}},
  actions: {start({commit}) {setInterval(() => {commit('tick')}, 60000)}}
}

const location = {
  namespaced: true,
  state: {
    location: [40.7186651, -73.9570632],
    locatable: 'geolocation' in navigator
  },
  mutations: {
    setLocation(state, location) {state.location = location}
  },
  actions: {
    locate({commit, state}) {
      if (state.locatable) navigator.geolocation.getCurrentPosition(p => {
        commit('setLocation', [p.coords.latitude, p.coords.longitude])
      })
    }
  }
}

export default new Vuex.Store({modules: {time, location}})
