import React from 'react';
import Visa from '../img/visa.png';
import Mastercard from '../img/master-card.svg';

const CreditCard = (props) => {
  const cardStyle = {
    backgroundColor: props.bgColor,
    height: '90px',
    width: '150px',
    border: '1px solid black',
    margin: '20px',
  };

  let cardType;
  if (props.type === 'Visa') {
    cardType = Visa;
  } else {
    cardType = Mastercard;
  }

  return (
    <div className="card" style={cardStyle}>
      <li>CreditCard Number {props.number.slice(12, 16)}</li>
      <li>Name: {props.owner}</li>
      <img id="swipe-it" src={cardType} alt="card-logo" />
    </div>
  );
};

export default CreditCard;
