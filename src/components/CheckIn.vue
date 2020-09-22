<template>
  <div class="checkIn">
    <button>{{ buttonLabel }}</button>
    <ul>
      <li v-for="check in checks" v-bind:key="check.type">
        {{ check.type }} - {{ new Date(check.time).toLocaleString('es-ES') }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CheckIn',
  data: function () {
    return {
      checks: [
        { type: 'in', time: Date.now() },
        { type: 'out', time: Date.now() }
      ]
    }
  },
  computed: {
    buttonLabel () {
      return "my button"
    }
  }
}
</script>
