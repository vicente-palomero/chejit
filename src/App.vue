<template>
  <div id="app">
    <div class="content">
      <CheckIn />
      <History />
    </div>
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
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, white 0%, gainsboro 35%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  flex-direction: column;
  height: 100%;
  font-size: large;
}
.content {
  padding-top: 10%;
  flex: 1 0 auto;
}

button {
  background-color: white;
  border: none;
  display: inline-block;
  outline: none;
}
button.action {
  padding: 5px 10px;
  background-color: transparent;
}

span.row {
  align-items: center;
  display: flex;
  justify-content: center;
}
.type {
  width: 20%;
  padding-left: 2%;
  text-align: right;
}
.date {
  width: 60%;
}
.action {
  width: 20%;
  text-align: left;
}

ul {
  list-style-type: none;
}
</style>
