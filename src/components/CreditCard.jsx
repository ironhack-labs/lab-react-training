import React from "react";

export default function CreditCard(props) {
  const divStyle = {
    backgroundColor: `${props.bgColor}`,
    textColor: `${props.color}`,
  };
  return (
    <div className="creditcard-wrapper" style={divStyle}>
      
      {props.type === "Visa" ? <img src="../img/visa.png" alt="logo Visa" /> : <img src="../img/master-card.svg" alt="MasterCard logo" />   }
      <p>**** **** **** {props.number.substr(12, 16)}</p>
      <p>Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
}
