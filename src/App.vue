<template>
  <credit-params
    class="credit-params"
    @update-payments="setPayments"
  />
  <credit-payments
    :payments="payments"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CreditParams from './components/CreditParams.vue'
import CreditPayments from './components/CreditPayments.vue';
import { CreditPayment } from './logic/CreditPayment';

export default defineComponent({
  name: 'App',
  components: {
    CreditParams,
    CreditPayments
  },
  data() {
    return {
      payments: null,
    }
  },
  methods: {
    setPayments(payments: CreditPayment) {
      this.payments = payments;
    }
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