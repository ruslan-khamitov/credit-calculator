import Credit from './Credit';
import { CreditPayment } from './CreditPayment';

export default class AnnuitetCredit extends Credit {
  constructor(
    interestRatePerYear: number,
    loanAmount: number,
    loanTermInMonths: number,
    loanDate: Date
  ) {
    super(interestRatePerYear, loanAmount, loanTermInMonths, loanDate);
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
      date: this.loanDate,
      interestPaymentAmount: 0,
      principalPaymentAmount: 0,
      remainingAmount,
      totalPaymentAmount: 0,
    }];

    for (let i = 0; i < this.loanTermInMonths; i++) {
      const interestPaymentAmount = remainingAmount * this.monthlyInterestRate;
      const principalPaymentAmount = monthlyPayment - interestPaymentAmount;
      remainingAmount -= principalPaymentAmount;
      const payment: CreditPayment = {
        date: this.getPaymentDate(i + 1),
        interestPaymentAmount,
        principalPaymentAmount,
        remainingAmount,
        totalPaymentAmount: Math.min(monthlyPayment, remainingAmount)
      };
      payments.push(payment);
    }
    return payments
  }

  private getMonthlyPaymentAmount() {
    const coef = (1 + this.monthlyInterestRate) ** this.loanTermInMonths;
    return Math.round(
      this.loanAmount * (this.monthlyInterestRate + (this.monthlyInterestRate/(coef - 1)))
    );
  }
}