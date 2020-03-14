import React from "react";
import "./CreditCard.css";

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) => {
  const divStyle = {
    backgroundColor: bgColor,
    color
  };

  const image = type === "Visa" ? "/img/visa.png" : "/img/master-card.svg";
  const num = `●●●● ●●●● ●●●● ${number
    .split("")
    .splice(12, 4)
    .join("")}`;

  return (
    <div className="credit-card-container">
      <div className="credit-card" style={divStyle}>
        <img src={image} alt="credit card type" />
        <h2>{num}</h2>
        <p>
          <span>
            Expires {expirationMonth}/{expirationYear}
          </span>
          <span>{bank}</span>
          <p>{owner}</p>
        </p>
      </div>
    </div>
  );
};

export default CreditCard;
