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
  const cardLogo = () => {
    if (type === 'Visa') {
      return <img src="/img/visa.png" alt="Visa logo" height="30" />;
    } else {
      return (
        <img src="/img/master-card.svg" alt="Mastercard logo" height="40" />
      );
    }
  };

  const cardNumber = () => {
    if (type === 'Visa') {
      return (
        <h4>
          <span>* * * *</span>
          <span>* * * *</span>
          <span>* * * *</span> {number.slice(number.length - 4)}
        </h4>
      );
    } else {
      return (
        <h4>
          <span>* * * *</span>
          <span>* * * *</span>
          <span>* * * *</span> {number.slice(number.length - 4)}
        </h4>
      );
    }
  };

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="card-logo">{cardLogo(type)}</div>
      <div className="card-number">{cardNumber(type)}</div>
      <div className="card-expiration">
        <p>
          Expires {expirationMonth} / {expirationYear}
        </p>
        <p className="bank-space">{bank}</p>
      </div>
      <div className="card-owner">
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
