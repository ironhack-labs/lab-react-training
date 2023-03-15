import React from 'react'
import visaImg from "../../assets/images/visa.png"
import masterCardImg from "../../assets/images/mc_symbol_opt_63_2x.png"
import './CreditCard.css'

export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  const cardLogo = type === "Visa" ? visaImg : masterCardImg;
  if(expirationMonth <10){
    expirationMonth = "0" + expirationMonth
}
const divStyle = {
  backgroundColor: bgColor,
  color: color,
  }
  return (
    <div className="creditCard" style={divStyle}>
      <div className="logoBanco">
        <img src={cardLogo} alt="card logo" />
      </div>
      <div className="targetNumber">
        <h4>●●●● ●●●● ●●●● {number.slice(-4)}</h4>
      </div>
      <div className="expiration">
        <p>Expires: {expirationMonth}/{expirationYear %100}</p>
        <p className="bank">{bank}</p> 
      </div>
      <div className="owner">
        <p>{owner}</p>
      </div>
    </div>
  )
}
