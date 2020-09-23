<template>
  <div id="app">
    <CheckIn />
    <History />
  </div>
</template>

<script>
import CheckIn from './components/CheckIn'
import History from './components/History'

export default {
  name: 'App',
  components: {
    CheckIn,
    History
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
