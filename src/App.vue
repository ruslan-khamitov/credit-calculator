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
import CreditPayments, { Payment } from './components/CreditPayments.vue';
import { CreditPayment } from './logic/CreditPayment';

interface AppData {
  payments: Payment | null
}

export default defineComponent({
  name: 'App',
  components: {
    CreditParams,
    CreditPayments
  },
  data(): AppData {
    return {
      payments: null,
    }
  },
  methods: {
    setPayments(payments: Payment): void {
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
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw;
}

@media screen and (min-width: 992px and max-width: 1200px) {
  #app {
    grid-template-columns: 300px 1fr;
  }
}

@media screen and (max-width: 991px) {
  #app {
    grid-template-columns: 1fr;
    grid-template-rows: 300px 1fr;
    max-height: unset;
    height: 100%;
    width: 100%;
  }
}
</style>