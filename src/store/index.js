import Vue from 'vue'
import Vuex from 'vuex'
import tick from './modules/tick'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    tick
  },
  strict: debug
})
