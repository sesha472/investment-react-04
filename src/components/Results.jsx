import React from 'react';
import { calculateInvestmentResults, formatter } from '../util/investment'

const Results = ({userInput}) => {
  const resultdata = calculateInvestmentResults(userInput);
  
  console.log(resultdata);
    
  console.log(resultdata[0].valueEndOfYear);
  console.log(resultdata[0].interest);
  const intialInvestment =
    resultdata[0].valueEndOfYear -
    resultdata[0].interest -
    resultdata[0].anuvalINvestment;
    formatter
    return (
    <table id='result'>
      <thead>
      <tr>
          <th>year</th>
          <th>investmentvalue</th>
          <th>intrest(year)</th>
          <th>total intrest</th>
          <th>invested capital</th>
        </tr>
      </thead>
      <tbody>
        {resultdata.map(item=>{
          const totalyear = item.valueEndOfYear- item.anuvalINvestment *item.year-intialInvestment;
          const totalamountinvested=item.valueEndOfYear-totalyear

        return(  <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(item.interest)}</td>
            <td>{formatter.format(totalyear)}</td>
            <td>{formatter.format(totalamountinvested)}</td>

 
          </tr>)  
        })}
        
      </tbody>

    </table>
  )
}

export default Results
