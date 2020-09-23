<template>
  <div class="history">
    <ul>
      <li v-for="tick in history" v-bind:key="tick.type">
        {{ tick.getType() }} - {{ tick.formatDate() }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'History',
  computed: {
    ...mapGetters('tick', {
      history: 'history'
    })
  }
}
</script>
