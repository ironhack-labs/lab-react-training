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
      <p className="CreditCard-type">{type}</p>
      <p className="CreditCard-number">●●●● ●●●● ●●●● {editedNumber}</p>
      <p className="CreditCard-expiration">
        Expires {expirationMonth}/{expirationYear}
        &nbsp;&nbsp;&nbsp;&nbsp;{bank}
      </p>
      <p className="CreditCard-owner">{owner}</p>
    </div>
  );
}

export default CreditCard;
