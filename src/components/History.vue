<template>
  <div class="history">
    <ul>
      <li v-for="tick in history" v-bind:key="tick.getId()">
        <span v-if="tick.isEditing">
          <span> edit - </span>
          <span>{{ tick.getType() }}</span>
          <span>{{ tick.formatDate() }}</span>
          <span><button v-on:click="edit(tick.getId())">done</button></span>
        </span>
        <span v-else>
          <span> ok - </span>
          <span>{{ tick.getType() }}</span>
          <span>{{ tick.formatDate() }}</span>
          <span><button v-on:click="edit(tick.getId())">edit</button></span>
        </span>

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
  },
  methods: {
    edit(id) {
      this.$store.dispatch('tick/edit', id)
    }
  }
}
</script>
