<template>
  <div class="history">
    <ul>
      <li v-for="tick in history" v-bind:key="tick.getId()">
        <span v-if="tick.isEditing">
          <DateEditor v-bind:tick="tick" />
        </span>
        <span v-else>
          <DateShow v-bind:tick="tick" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DateEditor from './DateEditor'
import DateShow from './DateShow'

export default {
  name: 'History',
  components: {
    DateEditor,
    DateShow
  },
  computed: {
    ...mapGetters('tick', {
      history: 'history'
    })
  }
}
</script>
