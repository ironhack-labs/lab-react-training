import React from 'react';
import './CreditCard.css';
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/master-card.svg'

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let Style = {
    backgroundColor: bgColor,
    color,
  };

  const logo = type === 'Visa' ? visa : mastercard

  return (
    <div className="creditCard" style={Style}>
      <div className="text-right">
        <img src={logo} alt="visa" />
      </div>
      <p className="number">
        {'•'.repeat(12)}
        {number.toString().substr(12, 16)}
      </p>
      <div className="flex">
        <div className="expiration">
          <p>Expires</p>
          <p>{expirationMonth.toString()}/</p>
          <p>{expirationYear.toString().substr(2, 3)}</p>
        </div>
        <p className="bank">{bank}</p>
      </div>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
