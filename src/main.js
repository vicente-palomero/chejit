import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  beforeCreate() {
    this.$store.commit('initializeStore')
  },
  render: h => h(App)
}).$mount('#app')
