import React from 'react';
import visaImg from '../assets/images/visa.png';
import masterImg from '../assets/images/visa.png';

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
  function checkType(type) {
    if (type === 'Visa') {
      return visaImg;
    } else {
      return masterImg;
    }
  }
  return (
    <div
      style={{ backgroundColor: bgColor, color: color }}
      className="creditCard"
    >
      <img src={checkType(type)} alt="CardType" />
      <p>{number}</p>
      <span>
        Expires:{expirationMonth} {expirationYear} {bank}{' '}
      </span>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
