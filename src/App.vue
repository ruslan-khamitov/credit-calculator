<template>
  <credit-params class="credit-params" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CreditParams from './components/CreditParams.vue'

export default defineComponent({
  name: 'App',
  components: {
    CreditParams
  }
})
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: grid;
  grid-template-columns: 350px 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  width: 100vw;
}
</style>