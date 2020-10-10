import Vue from 'vue'
import Vuex from 'vuex'
import tick from './modules/tick'

const modules = new Map([['tick', tick]])

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    tick
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('chejit')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('chejit')))
        )
        for(var [key, module] of Object.entries(state)) {
          modules.get(key).hydrate(module)
        }
      }
    },
  },
  strict: debug
})

store.subscribe((mutation, state) => {
  localStorage.setItem('chejit', JSON.stringify(state))
})

export default store
