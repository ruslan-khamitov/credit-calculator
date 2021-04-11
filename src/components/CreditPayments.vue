<template>
  <div v-if="payments != null">
    <h4>
      Переплата по процентам за кредит: {{ payments.totalInterestPaymentAmount.toFixed(2) }}
    </h4>
    <table class="credit-payments__table">
      <thead>
        <tr>
          <th width="150px">№</th>
          <th width="150px">Дата</th>
          <th class="right-align" width="150px">Остаток</th>
          <th class="right-align" width="150px">Выплата процентов</th>
          <th class="right-align" width="150px">Выплата по кредиту</th>
          <th class="right-align" width="150px">Размер выплаты</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(payment, index) in payments?.payments"
          :key="index"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ getDate(payment.date) }}</td>
          <td class="right-align">{{ Math.abs(payment.remainingAmount.toFixed(2)) }}</td>
          <td class="right-align">{{ payment.interestPaymentAmount.toFixed(2) }}</td>
          <td class="right-align">{{ payment.principalPaymentAmount.toFixed(2) }}</td>
          <td class="right-align">{{ Math.abs(payment.totalPaymentAmount).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    Настройте креди
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CreditPayments',
  props: {
    payments: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    getDate(date: Date) {
      const withZero = (num: number) => num < 10 ? `0${num}` : num;
      const year = date.getFullYear();
      const month = withZero(date.getMonth() + 1);
      const day = withZero(date.getDate());
      return `${day}.${month}.${year}`;
    }
  }
})
</script>


<style>
.credit-payments__table {
  border-collapse: collapse;
}

.credit-payments__table :is(td, th) {
  border: 1px solid black;
  padding: 0.5em;
}

.right-align {
  text-align: right;
}
</style>