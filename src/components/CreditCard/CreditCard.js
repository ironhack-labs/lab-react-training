import React from 'react';

function CreditCard({
  type, 
  number, 
  expirationMonth, 
  expirationYear, 
  bank, 
  owner, 
  bgColor, 
  color
}){

  let logo
  if(type === 'Visa'){
    logo = './img/visa.png'
  } else {
    logo = './img/master-card.svg'
  }
  let masked = '**** **** **** '+number.substr(-4);

  if(expirationMonth < 10){
    expirationMonth = '0' + expirationMonth
  }
  return(
    <article className='credit-card'
    style={{backgroundColor: bgColor, color: color}}>
      <img src={logo}></img>
      <div className='cardNumber'>{masked}</div>
      <span>Expires {expirationMonth}/{expirationYear}</span>
      <span> {bank}</span>
      <div>{owner}</div>
    </article>
  )
}

export default CreditCard