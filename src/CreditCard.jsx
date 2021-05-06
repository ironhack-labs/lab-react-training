import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const editedNumber = number.substr(number.length - 4);
  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
    >
      <p>{type}</p>
      <p>**** **** **** {editedNumber}</p>
      <p>
        Expires {expirationMonth}/{expirationYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
