<template>
  
    <v-slide-y-transition mode="out-in">
      <v-row>
        <v-col>
          <h1>Counter</h1>
          <p>This is a simple example of a Vue.js component test integrated with Vuex</p>
          <CounterCount />
        </v-col>
      </v-row>
    </v-slide-y-transition>
 
</template>

<script>
import CounterCount from '../components/CounterCount.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CounterView',

  components: {
    CounterCount,
  },
});
</script>
