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
  return (
    <div className="credit-card-container">
      <div className="credit-card" style={divStyle}>
        <h2>{number}</h2>
        <p>
          <span>
            Expires {expirationMonth}/{expirationYear}
          </span>
          <span>{bank}</span>
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
