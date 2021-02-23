import React from 'react'

export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  const cardImgType = cardType => {
      return cardType.toLowerCase() === 'visa' ? 'visa.png' : 'master-card.svg';
  }

  const returnHiddenCardNumber = (str) => {
      // let result = [];
      
      // for(let i = 0; i < (str.length - 4); i++) {
      //     result.push("·")
      //     if(result.length === 4 || result.length === 9 || result.length === 14) {
      //     result.push(' ')
      //     }
      // }

      // result.push(str.slice(-4));

      // return result.join('');

      // or 
      return `···· ···· ···· ${str.slice(-4)}`
      
  }

  return (
      <div style={{backgroundColor: bgColor, color, width: '300px', borderRadius: "15px",height: '150px', padding:"20px"}}>
      <img style={{width: "50px", float: 'right'}} src={`/img/${cardImgType(type)}`} />
      <h2>{returnHiddenCardNumber(number)}</h2>
      <p style={{margin: '0'}}>Expires: {expirationMonth}/{expirationYear}  {bank}</p>
      <p style={{margin: '0'}} >{owner}</p>
      </div>
  )
}
