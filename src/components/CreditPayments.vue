<template>
  <div class="credit-payments__result" v-if="payments != null">
    <h4>
      Сумма кредита: {{ payments.loanAmount }}
    </h4>
    <h4>
      Всего выплат: {{ payments.totalAmount.toFixed(2) }}
    </h4>
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
  <div
    v-else
    class="credit-payments__filler"
  >
    Настройте кредит
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
.credit-payments__result {
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5em;
}

.credit-payments__table {
  border-collapse: collapse;
}

.credit-payments__table :is(td, th) {
  border: 1px solid black;
  padding: 0.5em;
}

tr:hover {
  background-color: #f5f5f5;
}

.right-align {
  text-align: right;
}

.credit-payments__filler {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>