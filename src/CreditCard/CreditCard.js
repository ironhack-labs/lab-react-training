import React from 'react';
import './CreditCard.css'

const CreditCard = (prop) => {

  var lastTwoDigits = (prop.expirationYear + '').slice(2,4);
  var lastFourDigits = prop.number.slice(12, 16)

  return (
    <div className='creditCard' style={{backgroundColor:prop.bgColor, color:prop.color}}>
      <h5 className='ccType'>{prop.type}</h5>
      <h4 className='ccNumber'>**** **** **** {lastFourDigits}</h4>
      <div className='ccLow'>
        <div className='expBank'>
          <p className='ccExp'>Expires: {prop.expirationMonth}/{lastTwoDigits} </p><p>{prop.bank}</p>
        </div>
        <p>{prop.owner}</p>
      </div>
      
    </div>
  );
};

export default CreditCard