import React from 'react';
import './CreditCard.css';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

  const getBrand = () => {
    if (type === "Visa") {
      return <img className="brand__card__visa" src="../../img/visa.png" alt=""></img>
    }
    else {
      return <img className="brand__card__master" src="../../img/master-card.svg" alt=""></img>
    }
  }

  return (
    <div className="CreditCard" style={{ backgroundColor: bgColor, color: color }}>
      <div className="credit__container">
        <div className="header__card">
          {getBrand()}
        </div>
        <div className="body__card">
          <h1>•••• •••• •••• {number.slice(-4)}</h1>
        </div>
        <div className="footer__card">
          <h2>Expires {expirationMonth}/{expirationYear}    {bank}</h2>
          <h2>{owner}</h2>
        </div>
      </div>
    </div>
  )
}

export default CreditCard;
