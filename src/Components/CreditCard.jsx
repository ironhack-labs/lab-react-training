import React from 'react';
import "./../styles/CreditCard.css";

const CreditCard = (props) => {
  const month = props.expirationMonth < 10 ? "0" + props.expirationMonth : props.expirationMonth;
  return (
    <div>
      <div className="CreditCard" style={{backgroundColor: props.bgColor, color: props.color}}>
        <p className="CreditCard__type">{props.type}</p>
        <p className="CreditCard__number"><b>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;</b> {props.number.slice(12)}</p>
        <div className="CreditCard__bankInfo">
          <div className="CreditCard__bank">
            <p>Expires {month}/{props.expirationYear}</p>
            <span></span>
            <p>{props.bank}</p>
          </div> 
          <p className="CreditCard__owner">{props.owner}</p>
        </div>
        
      </div>
    </div>
    
  )
}

export default CreditCard
