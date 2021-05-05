import React from "react";

const CreditCard = (props) => {

  return (
    <div className="creditcard-container">
      <div className="creditcard-body" style={{background:`${props.bgColor}`, color:`${props.color}` }}>
        <h2>{props.type}</h2>
        <p className="card-number">{props.number}</p>
        <p>Expires {props.expirationMonth}/{props.expirationYear}  {props.bank}</p>
        <p>{props.owner}</p>
      </div>
    </div>
  )
}

export default CreditCard;
        