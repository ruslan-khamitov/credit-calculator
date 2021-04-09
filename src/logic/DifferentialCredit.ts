import Credit from './Credit';
import { CreditPayment } from './CreditPayment';

export default class DifferentialCredit extends Credit {
  constructor(
    interestRatePerYear: number,
    loanAmount: number,
    loanTermInMonths: number,
    loanDate: Date
  ) {
    super(interestRatePerYear, loanAmount, loanTermInMonths, loanDate);
  }

  calculate() {
    let remainingAmount = this.loanAmount;
    let totalInterestPaymentAmount = 0;

    const payments: CreditPayment[] = [
      {
        date: this.loanDate,
        interestPaymentAmount: 0,
        principalPaymentAmount: 0,
        remainingAmount,
        totalPaymentAmount: 0,
      }
    ];

    const principalPaymentAmount = this.getPrincipalPaymentAmount();

    for (let i=0; i < this.loanTermInMonths; i++) {
      const interestPaymentAmount = this.getInterestPaymentAmount(remainingAmount)
      const monthlyPayment = principalPaymentAmount + interestPaymentAmount;
      remainingAmount -= principalPaymentAmount;

      payments.push({
        date: this.getPaymentDate(i + 1),
        interestPaymentAmount,
        principalPaymentAmount,
        remainingAmount,
        totalPaymentAmount: Math.min(monthlyPayment, remainingAmount)
      })
    }


    return {
      totalInterestPaymentAmount: totalInterestPaymentAmount,
      payments: payments,
    };
  }

  private getPrincipalPaymentAmount() {
    return Math.round(this.loanAmount/this.loanTermInMonths);
  }

  private getInterestPaymentAmount(remainingAmount: number) {
    return remainingAmount * this.monthlyInterestRate;
  }
}