import React from "react";
import "./CreditCard.css";

export default function CreditCard(props) {
  const generateNumber = () => {
    let finalResult = "";
    for (let i = 0; i < props.number.length; i++) {
      const hiddenNumbers = i >= props.number.length - 4 ? props.number[i] : "•";
      if (i % 4 === 0) {
        finalResult += " ";
      }
      finalResult += hiddenNumbers;
    }
    return finalResult;
  };

  const formatBox = {
    background: props.bgColor,
    color: props.color,
  };

  return (
    <div>
      <div className="cc-container-data" style={formatBox}>
        <div className="cc-image">
          {props.type === "Visa" && <img src="./img/visa.png" alt="visa" />}
          {props.type === "Master Card" && <img src="./img/master-card.svg" alt="mcard" />}
        </div>
        <div className="cc-number">{generateNumber()}</div>
        <div className="cc-text">
          <p>
            Expires on: {props.expirationMonth < 10 ? "0" + props.expirationMonth : props.expirationMonth}/
            {props.expirationYear.toString().substr(-2)}
            <span>{props.bank}</span>
          </p>
          <p>{props.owner}</p>
        </div>
      </div>
    </div>
  );
}
