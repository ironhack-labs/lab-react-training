import React from "react";

function CreditCard(props){
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
  let logo;
   type === "Visa" ? logo ="/img/visa.png" : logo ="/img/master-card.svg";
return(
   <div className="creditCard" style={{ backgroundColor:bgColor , color : color }}>
        <p style={{textAlign:"right"}}><img src={logo} alt="card-logo" width="70" height="30"></img></p>
        <p style={{textAlign:"center", fontSize:"2rem"}}>{number} </p>
        <p>Expires {expirationMonth < 10 ? "0"+expirationMonth : expirationMonth} / {expirationYear} {bank} </p>
        <p>{owner} </p>
  </div>
);
};
export default CreditCard;