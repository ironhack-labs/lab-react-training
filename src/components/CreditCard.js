// components/CreditCard.js

import React from 'react';

const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
  const divStyle = {
    color: color,
    backgroundColor: bgColor,
  }
  return (
    <div className='credit-card' style={divStyle}>
      {type === 'Visa' && <img className='card-type' alt='Visa' src='/img/visa.png' />}
      {type === 'Master Card' && <img className='card-type' alt='Visa' src='/img/master-card.svg' />}
      <div className='card-number'>
        •••• •••• •••• {number.substring(12, 16)}
      </div> 
      <div className='card-info'>
        Expires {expirationMonth}/{expirationYear - 2000} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {bank} <br /> 
        {owner}
      </div>
    </div>
  )
}

export default CreditCard;
