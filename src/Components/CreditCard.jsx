import React from 'react';
import '../styles/creditCard.css';

function CreditCard(props) {
  return (
    <div className="eachCreditCard">
      <div>
        <p>{props.type}</p>
      </div>

      <p>{props.number}</p>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear} {props.bank}{' '}
      </p>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
