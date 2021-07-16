import React from 'react';
import './CreditCard.css'

function CreditCard(props) {
  return (
    <div className="credit-card" style= {{backgroundColor: props.bgColor, color: props.color}}>
      <img src={"../public/img/visa.png"} alt="card-logo"/>
      <div className="numbers">•••• •••• •••• {props.number.slice(12)}</div>
      <div className="expire">
        <span>Expires {props.expirationMonth}/{props.expirationYear}</span>
        <span className="bank">{props.bank}</span><br/>
        <span>{props.owner}</span>
      </div>
      
    </div>

  );
};

export default CreditCard;