import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const divStyle = {
    background: `${props.bgColor}`,
    color: `${props.color}`,
  };

  const checkType = (type) => {
    switch (type) {
      case 'Visa':
        return '/img/visa.png';
      case 'Master Card':
        return 'img/master-card.svg';
      default:
        return 'Enter a correct credit type';
    }
  };
  const typeUrl = checkType(props.type);

  console.log(`Type Url: ${typeUrl}`);

  return (
    <div>
      <h1>Credit Card</h1>
      <div id="credit-container" style={divStyle}>
        <div id="type-container">
          <img id="type" src={typeUrl} alt="Credit Card Logo" />
        </div>
        <div id="number">•••• •••• •••• {props.number.slice(12)}</div>
        <div id="expire">
          Expires <div id="mth">{('0' + props.expirationMonth).slice(-2)}</div>/
          <div id="year">{props.expirationYear.toString().slice(2)}</div>
          <div id="bank">{props.bank}</div>
        </div>
        <div id="owner">{props.owner}</div>
      </div>
    </div>
  );
};

export default CreditCard;
