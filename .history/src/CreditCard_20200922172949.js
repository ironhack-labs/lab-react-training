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
        <img calssName="img" src={img} alt="credit card"></img>
      </div>

      <p className="bigNumbers">•••• •••• •••• {props.number} </p>
    </div>
  );
}

export default CreditCard;
