import React from 'react';
import './CreditCard.css';

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
    const hideNumber = (number) =>{
        return number.split('').map((n,i)=>{
          let charac = ''
            if(i<12){
                charac = '.'
            }else{
                charac = n
            }
            return (i+1)%4===0  ? charac+' ' : charac
        }).join('')
    }
    console.log(hideNumber(number))
  const card = {
    Visa: "https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/visa.png",
    "Master Card": "https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/master-card.svg",
    
  };
  
  return <div className="creditCard" style={{backgroundColor:bgColor, color:color}}>
    <img className="logo" src={card[type]}/>
    <p className='number'>{hideNumber(number)}</p>
    <p>Expires {expirationMonth.toString().padStart(2,'0')}/{expirationYear.toString().split('').filter((n,i)=>i>=2).join('')} {bank}</p>
    <p>{owner}</p>
    
  </div>;
}
