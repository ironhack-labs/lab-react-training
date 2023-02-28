import React from 'react';
import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/masterCard.png';

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

  const myImage = type === 'Visa' ? visa : masterCard;
  return (
    <div
      className="cardBank"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div>
        <img src={myImage} alt={type} className="imageCardBank" />
      </div>
      <div>{`**** **** **** ` + number.slice(12)}</div>
      <div>
        <p>
          Expires: {expirationMonth}/{expirationYear} {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
