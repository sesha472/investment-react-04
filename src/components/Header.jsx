import React from 'react';
import investimg from '../assets/investment-calculator-logo.png'

const Header = () => {
  return (
    <header id='header'>
      <img src={investimg} alt='ivest-img'/>
    <h1>investment calculator</h1>
    </header>
  )
}

export default Header
