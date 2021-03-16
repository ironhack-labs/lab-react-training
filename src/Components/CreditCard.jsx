import React from 'react';
import "./../styles/CreditCard.css";

const CreditCard = (props) => {
  let typeImg;
  switch(props.type) {
    case "Visa":
      typeImg = "/img/visa.png";
      break;
    case "Master Card":
      typeImg = "/img/master-card.svg";
      break;
  }

  const month = props.expirationMonth < 10 ? "0" + props.expirationMonth : props.expirationMonth;
  return (
    <div>
      <div className="CreditCard" style={{backgroundColor: props.bgColor, color: props.color}}>
        <img src={typeImg} className="CreditCard__type" />
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
