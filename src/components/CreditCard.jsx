import React from 'react';

function CreditCard(props) {
  let imageSrc = '';
  if (props.type === 'Visa') {
    imageSrc = '/img/visa.png';
  } else {
    imageSrc = '/img/master-card.svg';
  }

  let twoDigitMonth = '';
  if (props.expirationMonth < 10) {
    twoDigitMonth = `0${props.expirationMonth}`;
  } else {
    twoDigitMonth = props.expirationMonth;
  }

  return (
    <div
      style={{ backgroundColor: props.bgColor, color: props.color }}
      className="CreditCard"
    >
      <div className="type">
        <img src={imageSrc} alt="" />
      </div>
      <div className="number">•••• •••• •••• {props.number.slice(-4)}</div>
      <div className="expires-bank">
        <span>
          Expires {twoDigitMonth}/{props.expirationYear.toString().slice(-2)}
        </span>
        <span className="bank">{props.bank}</span>
      </div>
      <div className="owner">{props.owner}</div>
    </div>
  );
}

export default CreditCard;
