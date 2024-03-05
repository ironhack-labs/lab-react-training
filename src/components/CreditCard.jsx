import React from 'react';
import visaImg from 'visa.png'

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

  return (
    <div
      className="CreditCard"
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
    >
      <div className="type">
        {type === 'Visa' && <img src={visaImg} alt='visa'/>}
        {type === 'Master Card' && (
          <img src="/img/master-card.svg" alt='../../public/master-card.svg' />
        )}
      </div>
      <div className="number">
        •••• •••• •••• {number.substring(number.length -4)}
      </div>
      <div className="expires-bank">
        <span>
          Expires {('0' + expirationMonth)}/
          {expirationYear.toString().substring(2)}{' '}
        </span>
        <span className="bank">{bank}</span>
      </div>
      <div className="owner">{owner}</div>
    </div>
  );
}

export default CreditCard;


