<template>
  <div class="checkIn">
    <button v-on:click="check">{{ buttonLabel }}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CheckIn',
  computed: {
    ...mapState({
      isRunning: state => state.tick.isRunning
    }),
    buttonLabel () {
      return this.isRunning ? "Check out" : "Check in"
    }
  },
  methods: {
    check () {
      this.$store.dispatch('tick/tick')
    }
  }
}
</script>
