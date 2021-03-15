import React from "react";

function CreditCard(props) {
  console.log(props);
let cardStyle={
  color: `${props.color}`,
  backgroundColor:`${props.bgColor}`
}
const cardContainer ={
  display: flex,
  justifyContent: center,
}
  return (
    <section className={cardContainer}>
      <div style={cardStyle}>
      <p>{props.number}</p>
      <p>{props.expirationMonth}</p>
      <p>{props.expirationYear}</p>
      <p>{props.owner}</p>
      <p>{props.bank}</p>
     
      </div>
      </section>
      
  );
}

export default CreditCard;