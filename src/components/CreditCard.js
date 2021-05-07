import React from 'react';

export default function CreditCard(props) {
  let number = props.number.slice(-4).padStart(props.number.length, '•');
  return (
    <div>
      <div
        className="creditCard"
        style={{
          backgroundColor: `${props.bgColor}`,
          color: `${props.color}`,
          width: '250px',
          borderRadius: '15px',
        }}
      >
        <p style={{ textAlign: 'right' }}>{props.type}</p>
        <p>{number}</p>
        <p>
          Expires: {props.expirationMonth}/{props.expirationYear} - {props.bank}
        </p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}
