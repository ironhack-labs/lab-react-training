import React from "react";

const CreditCard = (props) => {
  const type = () => {
    if (props.type === "Visa") return "./img/visa.png";
    if (props.type === "Master Card") return "./img/master-card.svg";
  };
  const inStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };
  const numberStyle = {
    fontSize: 30,
    marginLeft: 20,
  };
  return (
    <div className="card" style={inStyle}>
      <div className="cardLogo">
        <img src={type()} alt={props.type} />
      </div>
      <div style={numberStyle} >**** **** **** {props.number.slice(12, 16)}</div>
      <div>
        Expires{" "}
        {props.expirationMonth < 10
          ? "0" + props.expirationMonth
          : props.expirationMonth}
        /{props.expirationYear.toString().slice(2, 4)} &nbsp; &nbsp; &nbsp; {props.bank} <br></br>
        {props.owner}
      </div>
    </div>
  );
};

export default CreditCard;

// number="0123456789010995"
//               expirationMonth={3}
//               expirationYear={2021}
//               bank="N26"
//               owner="Maxence Bouret"
