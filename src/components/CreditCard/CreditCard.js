import React from 'react';

import './CreditCard.css';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

  const typeEnum = {
    Visa: "/img/visa.png",
    "Master Card": "/img/master-card.svg",
  };

  const last4Number = number.slice(12);

  const expirationMonthNorm = ("0" + expirationMonth).slice(-2);

  const expirationYearNorm = expirationYear.toString().slice(2);

  const cardColor = {
    backgroundColor: bgColor,
    color: color,
  }

  return (
    <div style={cardColor} className="creditcard-container">
      <img src={`${typeEnum[type]}`} alt={`${type}`} />
      <h2>&#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; {last4Number}</h2>
      <h3>Expires {expirationMonthNorm}/{expirationYearNorm}<span>{bank}</span></h3>
      <h3 className="creditcard-name">{owner}</h3>
    </div>
  );
};

export default CreditCard;
