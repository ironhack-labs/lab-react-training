import React from 'react';
import visalogo from '../assets/images/visa.png';
import masterlogo from '../assets/images/mastercard.png';

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

  const style = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  return (
    <div className="creditcard-card" style={style} key={owner}>
      <div className="logo-type">
        <img src={type === 'Visa' ? visalogo : masterlogo} alt="" />
      </div>
      <div className='card-number'>
        <h4>•••• •••• •••• {number.slice(12)}</h4>
      </div>
      <div className='card-details'>
        <p>Expires {expirationMonth}/{expirationYear}
        </p>
        <p>{bank}</p>
      </div>
      <div className='card-owner'>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
