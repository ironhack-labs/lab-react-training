import React from 'react';

function CreditCard(props) {
  const cardColor = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  const number = `**** **** **** ` + props.number.slice(-4);
  return (
    <div className="creditcard" style={cardColor}>
      <div className="card">
        <p>{props.type}</p>
      </div>
      <div className="number">
        <p>{number}</p>
      </div>
      <div class="expiry">
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
