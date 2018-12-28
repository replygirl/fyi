import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const version = {
  namespaced: true,
  state: {tag: ''},
  mutations: {setTag(state, tag) {state.tag = tag}},
  actions: {
    async getTag({commit}) {
      const res = await axios.get(
        '//api.github.com/repos/mooooooooooooooon/fyi/releases/latest'
      )
      commit('setTag', res.data.tag_name)
    }
  }
}

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

export default new Vuex.Store({modules: {version, time, location}})
