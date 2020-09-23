import Tick from '../../models/Tick'

const state = () => ({
  isRunning: false,
  history: []
})

const getters = {
  history: (state) => {
    return state.history
  }
}

const actions = {
  tick({ commit }) {
    commit('tick')
  }
}

const mutations = {
  tick(state) {
    state.isRunning = !state.isRunning
    state.history.unshift(new Tick(history.length, state.isRunning))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
