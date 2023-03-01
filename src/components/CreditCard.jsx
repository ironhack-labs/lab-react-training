import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const cardType =
    type === 'Visa'
      ? 'src/assets/images/visa.png'
      : 'src/assets/images/master-card.svg';
  const cardNumber = '**** **** **** ' + number.slice(12);
  const expiration = `${('0' + expirationMonth).slice(-2)}/${expirationYear
    .toString()
    .slice(2)}`;

  const style = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="credit-card" style={style}>
      <div className="credit-card-logo">
        <img src={cardType} alt={type} />
      </div>
      <div className="credit-card-number">{cardNumber}</div>
      <div className="credit-card-details">
        <div className="credit-card-expiration">
          <span>Expires {expiration}</span>
        </div>
        <div className="credit-card-bank">{bank}</div>
      </div>
      <div className="credit-card-owner">{owner}</div>
    </div>
  );
};

export default CreditCard;
