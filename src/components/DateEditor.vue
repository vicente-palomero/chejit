<template>
  <span>
    <span> edit - </span>
    <span>{{ tick.getType() }}</span>
    <span>
      <input type="text" :value="tickDate.getDate()" /> / 
      <input type="text" :value="tickDate.getMonth() + 1" /> / 
      <input type="text" :value="tickDate.getFullYear()" /> 
    </span>
    <span>
      <input type="text" :value="tickDate.getHours()" />  :
      <input type="text" :value="tickDate.getMinutes()" /> :
      <input type="text" :value="tickDate.getSeconds()" />
    </span>
    <span><button v-on:click="edit(tick.getId())">done</button></span>
  </span>
</template>

<script>
import Tick from '../models/Tick'

export default {
  name: 'DateEditor',
  props: {
    'tick': Tick,
  },
  computed: {
    tickDate: function () {
      return this.tick.getDate()
    }
  },
  methods: {
    edit(id) {
      this.$store.dispatch('tick/edit', id)
    }
  }
}
</script>

<style>
input {
  width: 4ch
}
</style>
