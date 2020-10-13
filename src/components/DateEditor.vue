<template>
  <span class="row">
    <span class="type">{{ tick.getType() }}</span>
    <span class="date">
      <input type="text" v-model="day" />/<input type="text" v-model="month" />/<input class="year" type="text" v-model="year" />
      <input type="text" v-model="hours" />:<input type="text" v-model="minutes" />:<input type="text" v-model="seconds" />
    </span>
    <span class="action">
      <button class="action" v-on:click="edit(tick.getId())">🔓</button>
      <button class="action" v-on:click="remove(tick.getId())">🗑️</button>
    </span>
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
    } ,
    remove(id) { this.$store.dispatch('tick/remove', id) }
  },
  created: function () {
    this.tickDate = this.tick.getDatetime()
  }
}
</script>

<style>
input {
  width: 2ch;
  text-align: right;
}
input.year {
  width: 4ch;
  margin-right: 1ch;
}
button {
  padding-left:  5px;
}
</style>
