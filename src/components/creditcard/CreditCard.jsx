import React from 'react';
import P from 'prop-types';
import visa from '../../img/visa.png';
import master from '../../img/master.png'; 

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
  let src = type==='Visa'?visa:master;
  let endNumba = number.slice(-4)
  return(
    <div className='credit-card-container' style={{display: 'flex',width:'30%', heigth:'200px',  flexDirection: 'column', justifyContent: 'space-evenly', color:`${color}`, backgroundColor: `${bgColor}`, borderRadius: '10px'}}>
      <div className='img-container' style={{display: 'flex', justifyContent: 'flex-end'}}>
        <img src={src} alt={type} style={{marginRight: '15px'}}/>
      </div>
      <div className='info-container' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
          <h2 style={{marginLeft:  '20%'}}>**** **** **** {endNumba}</h2>
          <div style={{display: 'flex', justifyContent: 'center', marginLeft: '20%'}}>
            <h4 style={{marginRight: '5px'}}>Expires: {expirationMonth}/{expirationYear} </h4>
            <h4>{bank}</h4>
          </div>
          <h3 style={{marginLeft: '20%'}}>{owner}</h3>
      </div>
    </div>
  )
}

export default CreditCard;