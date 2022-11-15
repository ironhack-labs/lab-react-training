import visaImg from "../assets/images/visa.png"
import mCardImg from "../assets/images/mastercard.png"


import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    function checkCard(type) {
        if(type === "Visa") {
        return visaImg
    } else {
        return mCardImg
    }
}
  return (
    
    <div className="credit-card" style={{backgroundColor: `${bgColor}`, color:`${color}`}}>
        <img className="credit-card-img" src={checkCard(type)} alt="" />
    <p className="credit-card-info">
    <span className="credit-card-number"> **** **** **** {number.substr(-4)} </span>
         Expires {expirationMonth}/{expirationYear.toString().substr(-2)} {bank} <span className="owner"> {owner} </span>
        </p>




    </div>
  )
}

export default CreditCard