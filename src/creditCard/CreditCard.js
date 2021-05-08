import React from 'react';
import './CreditCard.css';

export default function CreditCard(props) {
  const last4Digits = props.number.slice(12);

  const cardType = {
    Visa: '/img/visa.png',
    'Master Card': '/img/master-card.svg',
  };

  const cardColor = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };

  return (
    <div className="creditCard" style={cardColor}>
      <div className="logo">
        <img src={cardType[props.type]} alt="logoCard" />
      </div>
      <div className="number">
        <p>
          {'*'.repeat(12)} {last4Digits}
        </p>
      </div>
      <div className="name">
        <p>
          Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
        </p>
        <div>{props.owner}</div>
      </div>
    </div>
  );
}
