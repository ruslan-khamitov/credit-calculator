import Credit from './Credit';

export default class DifferentialCredit extends Credit {
  constructor(
    interestRatePerYear: number,
    loanAmount: number,
    loanTermInMonths: number
  ) {
    super(interestRatePerYear, loanAmount, loanTermInMonths);
  }

  calculate() {
    return {
      totalInterestPaymentAmount: 0,
      payments: [],
    };
  }
}