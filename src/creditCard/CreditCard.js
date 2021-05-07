import React from 'react';

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
      <img src={cardType[props.type]} alt="logoCard" />
      <p className="cardNumber">**** **** **** {last4Digits}</p>
      <p className="expirationDate">
        Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
      </p>
      <p className="owner">{props.owner}</p>
    </div>
  );
}
