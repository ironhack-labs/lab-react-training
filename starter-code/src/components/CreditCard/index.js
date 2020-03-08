import React from 'react';
import './style.css';

const CreditCard = props => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

  let imgPath = '';
  if (type === 'Visa') {
    imgPath = '/img/visa.png';
  } else if (type === 'Master Card') {
    imgPath = '/img/master-card.svg';
  }

  const cardStyle = {
    backgroundColor: bgColor,
    color: color
  };

  return (
    <div className="creditcard-container">
      <div className="credit-card" style={cardStyle}>
        <div className="type">
          <img className="img-creditcard" src={imgPath} alt="logo" />
        </div>
        <div className="number">•••• •••• •••• {number.slice(-4)}</div>
        <div className="card-info">
          <span>
            Expires {expirationMonth}/{expirationYear}{' '}
          </span>
          <span>{bank}</span>
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
