import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="card">
        <p className="type">{props.type}</p>
        <h2>
          **** **** **** ****{' '}
          {props.number.slice(props.number.length - 4, props.number.length)}
        </h2>
        <div className="expire">
          <p>
            Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
          </p>
          <p>{props.owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
