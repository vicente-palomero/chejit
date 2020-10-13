<template>
  <div class="history">
    <ul>
      <li v-for="tick in history" v-bind:key="tick.getId()">
        <DateEditor v-if="tick.isEditing" v-bind:tick="tick" />
        <DateShow v-else v-bind:tick="tick" />
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
  }}
</script>

<style scoped>
.history{
  margin: 10% auto;
}
ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

li {
  width: 100%;
}

</style>
