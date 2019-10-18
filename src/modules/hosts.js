import {
  getHosts,
  createHost
} from '../api/hosts'

const state = {
  hosts: []
}

const mutations = {
  'SET_HOSTS' (state, hosts) {
    state.hosts = hosts
  }
}

const actions = {
  FETCH_HOSTS ({ commit }) {
    getHosts().then(response => {
      commit('SET_HOSTS', response.data)
    }).catch(err => {
      console.log(err)
    })
  },
  CREATE_HOST ({ commit }, [host, installHost]) {
    createHost(host, installHost)
    // TODO: proper response and error handling
      .then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
  }
}

const getters = {
  hosts: state => state.hosts
}

export default {
  state,
  mutations,
  actions,
  getters
}
