import React from 'react';

function CreditCard(props) {
  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
      }}
    >
      <p>{props.type}</p>
      <p>{props.number.replace(/\d(?=\d{4})/g, '*')}</p>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear}
      </p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
