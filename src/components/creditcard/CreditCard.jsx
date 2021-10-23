import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  return (
    <div style={{ color: props.color }}>
      <div hex={props.bgColor}>
        <div>
          <header>
            <h1>{props.type}</h1>
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
