

import React from 'react';
// import './CreditCard.css';

const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

  const cardStyle = {
    backgroundColor: bgColor,
    color: color
  };

  const cardType = type === 'Visa' ? './img/visa.png' : './img/master-card.svg';

  const numberStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    letterSpacing: '0.2rem',
    marginBottom: '1rem'
  };

  const bankStyle = {
    fontSize: '1.2rem',
    marginBottom: '1rem'
  };

  const expiresStyle = {
    fontSize: '1.2rem'
  };

  return (
    <div className="credit-card" style={cardStyle}>
      <div className="credit-card__type">
        <img src={cardType} alt={type} />
      </div>
      <div className="credit-card__number" style={numberStyle}>
        •••• •••• •••• {number.slice(-4)}
      </div>
      <div className="credit-card__bank" style={bankStyle}>
        {bank}
      </div>
      <div className="credit-card__expires" style={expiresStyle}>
        Expires {expirationMonth}/{expirationYear}
      </div>
      <div className="credit-card__owner">{owner}</div>
    </div>
  );
};

export default CreditCard;


/*
import React from "react";
// import "./CreditCard.css";

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
  const lastFourDigits = number.slice(-4);
  const cardTypeImage =
    type === "Visa"
      ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png"
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png";

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="credit-card__type">
        <img src={cardTypeImage} alt={type} />
      </div>
      <div className="credit-card__number">
        {`**** **** **** ${lastFourDigits}`}
      </div>
      <div className="credit-card__expires">
        <span>Expires: </span>
        <span>
          {expirationMonth}/{expirationYear.toString().slice(-2)}
        </span>
      </div>
      <div className="credit-card__bank">{bank}</div>
      <div className="credit-card__owner">{owner}</div>
    </div>
  );
};

export default CreditCard;
*/