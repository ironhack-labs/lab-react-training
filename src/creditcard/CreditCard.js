import React from "react";

const CreditCard = (props) => {
 
  return (
    <div className="creditcard-container">
      <div className="creditcard-body" style={{background:`${props.bgColor}`, color:`${props.color}` }}>
        <div className="creditcard-logo-container">
          {props.type === "Visa" && <img src="/img/visa.png" className="creditcard-logo" />}
          {props.type === "Master Card" && <img src="/img/mastercard.png" className="creditcard-logo" />}
        </div>
        <p className="card-number">•••• •••• •••• {props.number.slice(-4)}</p>
        <p>Expires {props.expirationMonth}/{props.expirationYear}  {props.bank}</p>
        <p>{props.owner}</p>
      </div>
    </div>
  )
}

export default CreditCard;        