import React from "react";
import "./index.css";
import visa from "../../assets/images/visa.png";
import master from "../../assets/images/MasterCard.png";

function CreditCard({type,number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  
  if(expirationMonth < 10) {
    expirationMonth = '0'+ expirationMonth
  }

  const styleCreditCard = {
    background: bgColor,
    color: color,
  }
  return(
    <div className="CreditCard" style={styleCreditCard}>
        <div className='logo'>
            {type === 'Visa' ? <img src={visa} alt='Visa'/> : <img src={master} alt='Master Card'/>}                
        </div>
        <div className='number'>
        <h1> •••• •••• •••• {number.slice(-4)} </h1>
        </div>
        <div className='expiration'>
            <h1>Expires {expirationMonth}/{expirationYear % 1000} </h1> 
            <h1>{bank}</h1>
        </div>
        <div className="owner">
            <h1>{owner}</h1>
        </div>
    </div>
)
}

export default CreditCard;