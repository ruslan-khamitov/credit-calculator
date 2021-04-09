export interface CreditPayment {
  /**
   * Дата платежа
   */
  date: Date;
  /**
   * Остаток кредита
   */
  remainingAmount: number;
  /**
   * Размер процентов в этом месяце
   */
  interestPaymentAmount: number;
  /**
   * Размер основного платежа в этом месяце
   */
  principalPaymentAmount: number;
  /**
   * Суммарная сумма платежа
   */
  totalPaymentAmount: number;
}

export default interface CalculatedCreditPayment {
  /**
   * Сколько процентов будет выплачено
   */
  totalInterestPaymentAmount: number;
  /**
   * Платежи по месяцам
   */
  payments: CreditPayment[];
}