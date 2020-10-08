<template>
  <span>
    <span> edit - </span>
    <span>{{ tick.getType() }}</span>
    <span>
      <input type="text" v-model="day" /> / 
      <input type="text" v-model="month" /> / 
      <input type="text" v-model="year" /> 
    </span>
    <span>
      <input type="text" v-model="hours" /> :
      <input type="text" v-model="minutes" /> :
      <input type="text" v-model="seconds" />
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
  data: function () {
    return {
      tickDate: null,
      newDay: null,
      newMonth: null,
      newYear: null,
      newHours: null,
      newMinutes: null,
      newSeconds: null
    }
  },
  computed: {
    day: {
      get () { return this.newDay || this.tickDate.getDate() },
      set (val) { this.newDay = val }
    },
    month: {
      get () { return this.newMonth || this.tickDate.getMonth() + 1 },
      set (val) { this.newMonth = val }
    },
    year: {
      get () { return this.newYear || this.tickDate.getFullYear() },
      set (val) { this.newYear = val }
    },
    hours: {
      get () { return this.newHours || this.tickDate.getHours() },
      set (val) { this.newHours = val }
    },
    minutes: {
      get () { return this.newMinutes || this.tickDate.getMinutes() },
      set (val) { this.newMinutes = val }
    },
    seconds: {
      get () { return this.newSeconds || this.tickDate.getSeconds() },
      set (val) { this.newSeconds = val }
    },
  },
  methods: {
    edit(id) {
      const newDate = new Date(
        this.year,
        this.month - 1,
        this.day,
        this.hours,
        this.minutes,
        this.seconds
      )
      const timestamp = newDate.getTime()
      this.$store.dispatch('tick/edit', { id, timestamp })
    }
  },
  created: function () {
    this.tickDate = this.tick.getDatetime()
  }
}
</script>

<style>
input {
  width: 4ch
}
</style>
