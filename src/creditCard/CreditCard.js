import React from 'react';

export default function CreditCard(props) {
  const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
  };

  return (
    <div style={divStyle}>
      <div>{props.type}</div>
      <div>**** **** **** {props.number.slice(12)}</div>
      <div>
        Exp: {props.expirationMonth}/{props.expirationYear}
      </div>
      <div>{props.bank}</div>
      <div>{props.owner}</div>
    </div>
  );
}
