import React from 'react';
import './CreditCard.css';
/* import mastercardLogo from '../assets/images/master-card.svg'; */
import visaLogo from '../assets/images/visa.png';
import masterLogo from '../assets/images/mastercard.png';

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
    <div className="card" style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
      <div className='logo-container'>
        <img className="logo" src={type === 'Visa' ? visaLogo : masterLogo} alt="" />
      </div>
      <div className='number' >
        <p><span style={{fontWeight:"bolder"}}>•••• •••• •••• </span>{number.slice(-4)}</p>
      </div>
      <div className="details">
        <p>Expires: {expirationMonth} / {expirationYear}</p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
