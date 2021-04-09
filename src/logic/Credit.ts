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

  constructor(
    interestRatePerYear: number,
    loanAmount: number,
    loanTermInMonths: number
  ) {
    this.interestRatePerYear = interestRatePerYear;
    this.loanAmount = loanAmount;
    this.loanTermInMonths = loanTermInMonths;
  }

  public abstract calculate(): CalculatedCreditPayment;
}