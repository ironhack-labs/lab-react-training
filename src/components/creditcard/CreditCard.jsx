import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  return (
    <div className="container">
      <div className="cardContainer" hex={props.bgColor}>
        <div style={{ color: props.color }}>
          <header>
            <h2>{props.type}</h2>
          </header>
          <h3>•••• •••• ••••{props.number.substr(-4)}</h3>
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
