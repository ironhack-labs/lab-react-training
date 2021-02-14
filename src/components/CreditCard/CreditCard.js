import React from 'react';
import "./CreditCard.css"

export function CreditCard({
  type,
  number,
  bank,
  owner,
  bgColor,
  color,
  expirationMonth,
  expirationYear,
}) {
    const lastFourDigits = number.substr(-4, 4)
    const hashNumbers = "**** **** ****"
    const divColor = {
        backgroundColor: bgColor
      };
    const letterColor = {
        color: color
    }  
      
     const image = type === "visa" ? "../img/visa.png" : "../img/master-card.svg" 

  return (
     
      <div className="credit-card" style={divColor}>
        <img className="img-size" src={image} alt="Visa o Mastercard" /> 
        <h2 style={letterColor}>{`${hashNumbers} ${lastFourDigits}`} </h2> 
        <p style={letterColor}>{bank}</p>
        <p style={letterColor}>{owner}</p>
        <p style={letterColor}>{formatNumber(expirationMonth)}</p>
        <p style={letterColor}>{formatNumber(expirationYear)}</p>
      </div>

  )
}

const formatNumber = number => `0${number}`.slice(0, 2)

