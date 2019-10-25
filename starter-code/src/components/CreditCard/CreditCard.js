import React from 'react';
import './CreditCard.css';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  let imgSrc = '';
  type === 'Visa' ? imgSrc = '/img/visa.png' : imgSrc = '/img/master-card.svg';

  let expMonth, expYear;
  expirationMonth < 10 ? expMonth = `0${expirationMonth}` : expMonth = `${expirationMonth}`;
  expYear = expirationYear.toString().substring(2);

  const divStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`
  }

  let sensNumber = `•••• •••• •••• ${number.toString().substring(12)}`

  return (
    <div className="creditCard" style={divStyle}>
      <div className='type'><img src={imgSrc} alt={type} /></div>
      <div className='number'>{sensNumber}</div>
      <div><span>Expires {expMonth}/{expYear}</span> <span className="bank">{bank}</span></div>
      <div className='owner'>{owner}</div>
    </div>
  );
};

export default CreditCard;
