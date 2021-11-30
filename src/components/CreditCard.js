import React from 'react';

export default function CreditCard(props) {
  return (
    <div
      className="credit-cards"
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        display: 'inline-block',
        width: '300px',
        margin: '10px 0 10px 100px',
        padding: '20px',
        borderRadius: '5px',
      }}
    >
      <div>
        <img src={props.logo} alt="" style={{ width: '40px' }} /> <br />
        <h3>•••• •••• ••••{props.number.substr(-4)}</h3>
        <p>
          Expires {props.expirationMonth}/{props.expirationYear}
          <span>{props.bank}</span>
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}
