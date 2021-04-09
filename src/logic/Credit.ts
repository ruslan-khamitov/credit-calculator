import CalculatedCreditPayment from "./CreditPayment";

export default abstract class Credit {
  /**
   * Процентная ставка
   */
  public interestRatePerYear: number = 18;

  /**
   * Сумма кредита
   */
  public loanAmount: number = 500000;

  /**
   * Срок кредита
   */
  public loanTermInMonths: number = 6;

  /**
   * Дата заключения кредита
   */
  public loanDate: Date;

  public monthlyInterestRate: number = 0;

  constructor(
    interestRatePerYear: number,
    loanAmount: number,
    loanTermInMonths: number,
    loanDate: Date
  ) {
    this.interestRatePerYear = interestRatePerYear;
    this.loanAmount = loanAmount;
    this.loanTermInMonths = loanTermInMonths;
    this.loanDate = loanDate;
    this.monthlyInterestRate = this.getMonthlyInterestRate();
  }

  public getPaymentDate(months: number) {
    const date = new Date(this.loanDate);
    const d = date.getDate();
    date.setMonth(date.getMonth() + months);
    if (date.getDate() !== d) {
      // если все же день изменился, то скорее всего в том месяце нет этого числа
      date.setDate(0);
    }
    return date;
  }

  public abstract calculate(): CalculatedCreditPayment;

  private getMonthlyInterestRate() {
    return this.interestRatePerYear / 100 / 12;
  }
}