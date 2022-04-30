<template>
  <div>
    <p>
      Current count (Vuex):
      <strong>{{ count }}</strong>
    </p>
    <v-btn class="ma-2" color="info" @click.prevent="increment">Increment</v-btn>
    <v-btn class="ma-2" color="info" @click.prevent="reset">Reset</v-btn>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: "CounterCount",
  setup: () => {
    const store = useStore()
    return {
      count: computed(() => store.state.count),
      evenOrOdd: computed(() => store.getters.evenOrOdd),
      increment: () => store.dispatch('increment'),
      reset: () => store.dispatch('reset'),
      decrement: () => store.dispatch('decrement'),
      incrementIfOdd: () => store.dispatch('incrementIfOdd'),
      incrementAsync: () => store.dispatch('incrementAsync')
    }
  }
}
</script>
