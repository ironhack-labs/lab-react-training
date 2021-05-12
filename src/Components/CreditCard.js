import React from 'react';

function CreditCard(props) {
  const cardType = {
    Visa: '/img/visa.png',
    'Master Card': 'img/master-card.svg',
  };
  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
      }}
    >
      <img className="CardImg" src={cardType[props.type]} />
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
