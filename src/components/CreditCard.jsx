import React from 'react';

function CreditCard(props) {
  return (
    <div
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
      className="credit-card"
    >
      <div className="top-card">
        <p>{props.type}</p>
      </div>
      <div className="card-number">
        <h3>**** **** **** {props.number.split('').slice(12)}</h3>
      </div>
      <div className="bottom-card">
        <p>
          Expires {props.expirationMonth}/{props.expirationMonth} {props.bank}
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
