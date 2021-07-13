import React from 'react';

function CreditCard({type, number, expirationMonth,
        expirationYear, bank, owner, bgColor, color}) {
  return (
    <div>
      <ul>
        <p>{type}</p>
        {type}
        {number}
        {expirationMonth}
        {expirationYear}
        {bank}
        <p>{owner}</p>
        {bgColor}
        {color}
      </ul>
    </div>
  );
}

export default CreditCard; 


