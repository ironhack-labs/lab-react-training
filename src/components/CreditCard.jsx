import React from 'react';

const CreditCard = (props) => {
  var cardImg = '';
  if (props.type === 'Visa') {
    cardImg = <img src="/img/visa.png" alt="" />;
  } else {
    cardImg = <img src="/img/master-card.svg" alt="" />;
  }

  var expMonth = '';
  if (props.expirationMonth < 10) {
    expMonth = `0${props.expirationMonth.toString()}`;
  } else {
    expMonth = props.expirationMonth;
  }

  return (
    <div
      style={{
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`,
      }}
      className="CreditCard"
    >
      <div className="type">{cardImg}</div>
      <div className="number">•••• •••• •••• {props.number.slice(12, 16)}</div>
      <div className="expires-bank">
        <span>
          Expires {expMonth}/{props.expirationYear.toString().slice(2, 4)}
        </span>
        <span className="bank">{props.bank}</span>
      </div>
      <div className="owner">{props.owner}</div>
    </div>
  );
};

export default CreditCard;
