import React from "react";
import masterCard from "../assets/images/master-card.svg";
import visaCard from "../assets/images/visa.png";
import "./CreditCard.css"

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const last4Digits = number.slice(-4);
  const cardTypeImage = type === "Visa" ? visaCard : masterCard;

  return (
    <div className="creditCard" style={{ backgroundColor: bgColor, color: color }}>
      <div className="creditCard-type">
        <img src={cardTypeImage} alt={type} width={100}/>
      </div>
      <div className="creditCard-number">
        •••• •••• •••• {last4Digits}
      </div>
      <div className="creditCard-expiry-bank">
        <span>Expires {expirationMonth}/{expirationYear}</span>
        <span>{bank}</span>
      </div>
      <div className="creditCard-owner">{owner}</div>
    </div>
  );
};

export default CreditCard;
