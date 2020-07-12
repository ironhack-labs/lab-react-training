import React from 'react'
import "./CreditCard.css"



function CreditCard(props) {
  
    let bankImg = ""
    if (props.type === "Visa") {
         bankImg = "/img/visa.png"
    } else if (props.type === "Master Card") {
         bankImg = "/img/master-card.svg"
    }

    

    return (
        
        <div className="card" style={{backgroundColor: props.bgColor, color: props.color}}>
        <img className="logo    " src={bankImg} alt="logo"></img>
        <p className="number">{props.number}</p>     
        <p className="expires">Expires: {props.expirationMonth} / {props.expirationYear}  {props.bank}</p>
        <p className="owner">{props.owner}</p>
        </div>
       
    )
}

export default CreditCard
