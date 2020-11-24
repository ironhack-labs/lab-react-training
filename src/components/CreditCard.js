import React from 'react';
import '../styles/CreditCard.css';


export default function CreditCard(props) {
  const color = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  const number = `**** **** **** ` + props.number.slice(-4);
  return (
    <div className="card" style={color}>
      <div className="logo-container">{props.type}</div>
      <div className="creditcardNum">{number}</div>
      <div className="cardDetails">
        {props.expirationMonth}/{props.expirationYear}
        {props.bank}
      </div>
      <div className="ownerDetails">{props.owner}</div>
    </div>
  );
}