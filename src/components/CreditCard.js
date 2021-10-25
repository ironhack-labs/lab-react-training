import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  return (
    <div>
      <header>
        <h1>{props.type}</h1>
      </header>
      <h3>•••• •••• ••••{props.number.substr(-4)}</h3>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear}
        <span className="paragraph">{props.bank}</span>
      </p>
    </div>
  );
}

export default CreditCard;
