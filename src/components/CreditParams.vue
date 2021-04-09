<template>
  <section class="credit-params">
    <div class="credit-params__type">
      <label for="creditType">Вид кредита</label>
      <select id="creditType" v-model="creditType">
        <option value="anuitet">Ануитетный</option>
        <option value="differential">Дифференцированный</option>
      </select>
    </div>
    <base-input
      label="Сумма кредита (руб)"
      type="number"
      id="loanAmount"
      v-model="loanAmount"
    />
    <base-input
      label="Процентная ставка, % годовых"
      type="number"
      id="loanInterestRate"
      v-model="loanInterestRate"
      step="0.1"
    />
    <div class="credit-params__term">
      <base-input
        label="Срок займа"
        type="number"
        id="loanAmount"
        v-model="loanTerm"
      />
      <select v-model="termType">
        <option value="years">Лет</option>
        <option value="months">Месяцев</option>
      </select>
    </div>
    <button class="credit-params__calculate-button">
      Расчитать
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseInput from './BaseInput.vue';

export default defineComponent({
  name: 'CreditParams',
  components: {
    BaseInput,
  },
  data() {
    return {
      loanAmount: 0,
      loanInterestRate: 10,
      termType: "months",
      loanTerm: 6,
      creditType: 'anuitet'
    }
  },
})
</script>

<style>
.credit-params {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: hsla(210, 50%, 95%);
  padding: 0.5em 1em;
}

.credit-params__term {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 1fr;
  column-gap: 1em;
  align-items: center;
}

.credit-params__term select  {
  height: 2em;
  align-self: flex-end;
  margin-bottom: 0.5em;
  font-size: 0.9em;
}

.credit-params__type {
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 100%;
}

.credit-params :is(select) {
  height: 25px;
  width: 100%;
}

.credit-params__type :is(label, select, option) {
  font-size: 0.8;
}

.credit-params__calculate-button {
  background-color: #1890ff;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  height: 3em;
  margin: 0.5em auto;
  width: 100%;
  transition: background 200ms ease-in;
}

.credit-params__calculate-button:hover {
  background-color: #096dd9;
}
</style>