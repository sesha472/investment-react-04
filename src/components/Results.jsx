import React from 'react'
import { calculateInvestmentResults } from '../util/investment'

const Results = ({userInput}) => {
  const resultdata=calculateInvestmentResults(userInput);
  console.log(resultdata);
  return (
    <div>
      <p>...result</p>
    </div>
  )
}

export default Results
