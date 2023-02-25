import React from 'react';

export const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const paddedMonth = expirationMonth.toString().padStart(2, '0');

  const lastFourDigits = number.slice(-4);

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="credit-card" style={cardStyle}>
      <div className="credit-card-logo">
        <img src="logo aqui" alt={type} />
      </div>
      <div className="credit-card-number">•••• •••• •••• {lastFourDigits}</div>
      <div className="credit-card-details">
        <span>
          Expires {paddedMonth}/{expirationYear.toString().slice(-2)}
        </span>
        <span>{bank}</span>
      </div>
      <div className="credit-card-owner">{owner}</div>
    </div>
  );
};
