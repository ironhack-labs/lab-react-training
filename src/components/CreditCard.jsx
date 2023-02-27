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
  const cardType = type === 'Visa' ? './img/visa.png' : './img/master-card.svg';
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
      <div className="credit-card__logo">
        <img src={cardType} alt={type} />
      </div>
      <div className="credit-card__number">{cardNumber}</div>
      <div className="credit-card__details">
        <div className="credit-card__expiration">
          <span>Expires {expiration}</span>
        </div>
        <div className="credit-card__bank">{bank}</div>
      </div>
      <div className="credit-card__owner">{owner}</div>
    </div>
  );
};

export default CreditCard;

