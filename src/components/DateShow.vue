<template>
  <span class="row">
    <span class="type">{{ tick.getType() }}</span>
    <span class="date">{{ tick.formatDate() }}</span>
    <span class="action"><button class="action" v-on:click="edit(tick.getId())">🔒</button></span>
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
      this.$store.dispatch('tick/edit', { id })
    }
  }
}
</script>
