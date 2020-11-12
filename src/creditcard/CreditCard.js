import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  return (
    <div
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
      className="boxcolor1"
    >
      <p>{props.type} </p>

      <p>{props.number} </p>

      <p>{props.month} </p>

      <p>{props.year} </p>

      <p>{props.bank} </p>

      <p>{props.owner} </p>

      <p>{props.bgColor} </p>

      <p>{props.color} </p>
    </div>
  );
}

export default CreditCard;
