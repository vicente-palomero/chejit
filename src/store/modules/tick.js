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
  },
  edit({ commit }, { id, timestamp }) {
    commit('edit', { id, timestamp })
  },
  remove({ commit }, id) {
    commit('remove', id)
  }
}

const mutations = {
  tick(state) {
    state.isRunning = !state.isRunning
    const previousId =
      state.history.length ? state.history[0].getId() : -1
    state.history.unshift(
      new Tick(previousId + 1, state.isRunning)
    )
  },
  edit(state, { id, timestamp }) {
    const tick = state.history.find(tick => tick.getId() === id)
    tick.updateTimestamp(timestamp)
    tick.swapEditing()
  },
  remove(state, id) {
    state.history = state.history.filter(tick => tick.getId() !== id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
