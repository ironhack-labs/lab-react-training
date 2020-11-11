import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  return (
    <div
      className="cardContainer"
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <p>{props.type}</p>
      <p>{props.number}</p>

      <p>
        {props.expirationMonth}/{props.expirationYear} {props.bank}
      </p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
