import React from 'react';
import './creditCard.css';

export default function CreditCard(props) {
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

  const cardColor = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="credit-container" style={cardColor}>
      {type === 'Visa' && <img src="/img/visa.png" alt="visa" />}
      {type === 'Master Card' && (
        <img src="/img/master-card.svg" alt="master" />
      )}
      <p className="card-number">**** **** **** {number.slice(12)}</p>
      <span className="expiration-bank">
        {expirationMonth.toString().length === 1 && (
          <span>0{expirationMonth}</span>
        )}
        /{expirationYear} {bank}
      </span>
      <br />
      <p className="owner">{owner}</p>
    </div>
  );
}
