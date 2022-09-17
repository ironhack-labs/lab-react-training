import React from 'react';
import './CreditCard.css';

const CreditCard = ({ newCard }) => {
  return (
    <div
      className="creditcard-container"
      style={{ backgroundColor: newCard.card.bgColor }}
    >
      <div className="type-creditcard">
        <img className="image" src={newCard.card.logo} alt="brand-card" />
      </div>
      <div className="number-creditcard">{newCard.card.number}</div>
      <div className="expires-bank">
        <span>
          Expires:{newCard.card.expirationMonth}/{newCard.card.expirationYear}
        </span>
        <span className="bank">{newCard.card.bank}</span>
      </div>
      <div className="owner-name">{newCard.card.owner}</div>
    </div>
  );
};

export default CreditCard;
