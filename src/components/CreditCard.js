import React from 'react';
import '../assets/css/CreditCard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const divStyle = {
    backgroundColor: bgColor,
    color,
    width: '20%',
  };

  const srcImage = type == 'Visa' ? '/img/visa.png' : '/img/master-card.svg';

  return (
    <div className="CreditCard" style={divStyle}>
      <div className="CredirCard-type">
        <img src={srcImage} alt={type}></img>
      </div>
      <div className="CredirCard-number">
        •••• •••• •••• {number.slice(number.length - 4)}
      </div>
      <div className="CredirCard-expires-bank">
        <span>
          Expires {expirationMonth} / {expirationYear}
        </span>
        <span>{bank}</span>
      </div>
      <div className="CredirCard-owner">{owner}</div>
    </div>
  );
};

export default CreditCard;
