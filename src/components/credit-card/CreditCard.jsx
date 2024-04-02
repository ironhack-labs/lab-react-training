import React from 'react';
import './CreditCard.css';

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  const lastFourDigits = number.slice(-4);
  return (
    <div className='CreditCard' style={{backgroundColor: bgColor}}>
        <div className='type'>
            <h5 style={{color: color}}>{type}</h5>
        </div>
        <div className='data'>
            <div>
                <h3 style={{color: color}}>{'···· ···· ···· ' + lastFourDigits}</h3>
            </div>
            <div className='date'>
                <p style={{color: color}}>Expires: {expirationMonth}/{expirationYear}</p>
                <p style={{color: color}}>{bank}</p>
            </div>
            <div>
                <p style={{color: color}}>{owner}</p>
            </div>
        </div>
    </div>
  )
}

export default CreditCard;