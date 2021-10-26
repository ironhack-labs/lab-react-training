import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  return (
    <div className="containerCard">
      <div className="cardContainer" style={{ backgroundColor: props.bgColor }}>
        <div style={{ color: props.color }}>
          <header>
            <h2>{props.type}</h2>
          </header>
          <h2>•••• •••• ••••{props.number.substr(-4)}</h2>
          <p>
            Expires {props.expirationMonth}/{props.expirationYear}
            <span className="bankName">{props.bank}</span>
          </p>
          <p>{props.owner}</p>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
