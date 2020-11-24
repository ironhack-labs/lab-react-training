import React from 'react';

function CreditCard(props) {
  const color = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  const number = `**** **** **** ` + props.number.slice(12, 16);
  return (
    <div className="creditcard" style={color}>
      <div className="card">
        <p>{props.type}</p>
      </div>
      <div className="number">
        <p>{number}</p>
      </div>
      <div className="expiry">
        <p>
          Expires {props.expirationMonth}/ {props.expirationYear}
        </p>
        <p>{props.bank}</p>
      </div>
      <div className="owner">
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
