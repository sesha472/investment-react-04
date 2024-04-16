
export function calculateInvestmentResults({
  intialInvestment,
  anuvalINvestment,
  expectedReturn,
  duration,
}) {


  const annualData = [];
  let investmentValue = intialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + anuvalINvestment;
    annualData.push({
      year: i + 1,  // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear : investmentValue,  // investment value at end of year
      anuvalINvestment : anuvalINvestment, // investment added in this year
    });
  }

  return annualData ;
}


export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

