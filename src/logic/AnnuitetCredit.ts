import Credit from './Credit';
import { CreditPayment } from './CreditPayment';

export default class AnnuitetCredit extends Credit {
  constructor(
    interestRatePerYear: number,
    loanAmount: number,
    loanTermInMonths: number
  ) {
    super(interestRatePerYear, loanAmount, loanTermInMonths);
  }

  calculate() {
    const monthlyPayment = this.getMonthlyPaymentAmount();
    const totalInterestPaymentAmount = (monthlyPayment * this.loanTermInMonths) - this.loanAmount;

    return {
      totalInterestPaymentAmount,
      payments: this.getPayments(monthlyPayment),
    };
  }

  private getPayments(monthlyPayment: number): CreditPayment[] {
    const now = new Date();
    let remainingAmount = this.loanAmount; // 10000
    const payments: CreditPayment[] = [{
      date: now,
      interestPaymentAmount: 0,
      principalPaymentAmount: 0,
      remainingAmount,
      totalPaymentAmount: 0,
    }];
    const monthlyInterestRate = this.getMonthlyInterestRate();

    for (let i = 0; i < this.loanTermInMonths; i += 1) {
      const interestPaymentAmount = remainingAmount * monthlyInterestRate;
      const principalPaymentAmount = monthlyPayment - interestPaymentAmount;
      const payment: CreditPayment = {
        date: this.addMonths(now, i + 1),
        interestPaymentAmount,
        principalPaymentAmount,
        remainingAmount,
        totalPaymentAmount: monthlyPayment,
      };
      remainingAmount -= principalPaymentAmount;
      payments.push(payment);
    }
    return payments
  }

  private addMonths(_date: Date, months: number) {
    const date = new Date(_date);
    const d = date.getDate();
    date.setMonth(date.getMonth() + months);
    if (date.getDate() !== d) {
      date.setDate(d);
    }
    return date;
  }

  private getMonthlyPaymentAmount() {
    const monthlyInterestRate = this.getMonthlyInterestRate();
    const coef = (1 + monthlyInterestRate) ** this.loanTermInMonths;
    return Math.round(
      this.loanAmount * (monthlyInterestRate + (monthlyInterestRate/(coef - 1)))
    );
  }

  private getMonthlyInterestRate() {
    return this.interestRatePerYear / 100 / 12;
  }

}