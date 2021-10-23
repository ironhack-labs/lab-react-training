import React from 'react';

function CreditCard(props) {
  return (
    <div
      style={{
        background: props.bgColor,
        color: props.color,
        width: '200px',
        padding: '16px',
        border: '1px solid #cecece',
        borderRadius: '4px',
      }}
    >
      <img
        style={{ width: '15%' }}
        src={props.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'}
        alt=""
      />
      <p>•••• •••• •••• {props.number.substr(-4)}</p>
      <p>Expires {props.expirationMonth}</p>
      <p>{props.expirationYear}</p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
