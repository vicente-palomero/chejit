<template>
  <span>
    <span> ok - </span>
    <span>{{ tick.getType() }}</span>
    <span>{{ tick.formatDate() }}</span>
    <span><button v-on:click="edit(tick.getId())">edit</button></span>
  </span>
</template>

<script>
import Tick from '../models/Tick'

export default {
  name: 'DateShow',
  props: {
    'tick': Tick,
  },
  methods: {
    edit(id) {
      this.$store.dispatch('tick/edit', id)
    }
  }
}
</script>
