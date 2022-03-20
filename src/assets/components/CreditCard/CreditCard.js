import React from 'react';
// import visa from '../images/visa.png';
// import masterCard from '../images/master-card.svg';
import './CreditCard.css';

const CreditCard =({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {


  return (
    <div className="card-credit" style={{ backgroundColor: `${bgColor}`, color: `${color}`}}>
    <div>
      <h3 className="logo-card">{type}</h3>
      <p>●●●● ●●●● ●●●● {number.slice(-4, 16)}</p>
      <p>Expires: {expirationMonth}/{expirationYear} {bank}</p>
      <p>{owner}</p>
    </div>
    </div>
  );
}

export default CreditCard;
