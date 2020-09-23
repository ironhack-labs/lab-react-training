import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  let img;
  if(props.type="Visa") {img = "/img/visa.png"
} else {
  img= "/img/master-card.svg"
}
  

  } 
  return (
    <div className="CreditCardContainer" style={{ color: `${props.color}`, backgroundColor: `${props.bgColor}` }}>
      
      <div className="CreditCardImg">
      <img calssName="img" src={img} alt="credit card">
      </div>

      <p>
        <b>Type:</b> {props.type}
      </p>
      <p>
        <b>First Name:</b> {props.firstName}
      </p>
      <p>
        <b>Gender:</b> {props.gender}
      </p>
      <p>
        <b>Height:</b> {props.height}
      </p>
      <p>
        <b>Birth:</b> {props.birth.toDateString()}
      </p>
  

      </div>
    

  )}

export default CreditCard;
