import React from 'react';
import './CreditCard.css'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    return (
        <div className='CreditCard' style={{backgroundColor: `${bgColor}`}}>
        <div className='type'>
          <p>{type}</p> 
        </div>
        <div className='number'>•••• •••• •••• {number.slice(12)}</div>
        <div className='expires-bank'>
          <span>Expires {expirationMonth}/{expirationYear}</span>
          <span className='bank'>{bank}</span>
        </div>
        <div className='owner'>{owner}</div>
      </div>
    )
}

export default CreditCard;
