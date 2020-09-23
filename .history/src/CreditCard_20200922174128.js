import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  let img;
  if (props.type === 'Visa') {
    img = '/img/visa.png';
  } else {
    img = '/img/master-card.svg';
  }
  return (
    <div
      className="CreditCardContainer"
      style={{ color: `${props.color}`, backgroundColor: `${props.bgColor}` }}
    >
      <div className="CreditCardImg">
        <img src={img} alt="credit card"></img>
      </div>

      <p className="bigNumbers">•••• •••• •••• {props.number.substr(-4)} </p>
      <div className="CreditCardNumbers">
        <p>
          Expires {props.expirationMonth} / {props.expirationYear}
        </p>
      </div>
    </div>
  );
}

export default CreditCard;
