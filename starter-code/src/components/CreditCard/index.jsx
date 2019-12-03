import React from 'react';
import './style.css';

function CreditCard (props) {
  // console.log(props);
  const divStyle = {
    height: '7.5em',
    width: '15em',
    backgroundColor: props.bgColor,
    color: props.color,
    border: '0.25em solid ' + props.bgColor,
    borderRadius: '0.25em',
    margin: '1em'
  };
  
  let cardTypeImg = "";
  switch (props.type) {
    case 'Master Card':
      cardTypeImg = require("./../../img/master-card.svg");
      break;
    case 'Visa':
      cardTypeImg = require("./../../img/visa.png");
      break;
    default:
      cardTypeImg = '';
  }

  // const cardNum = props.number.split().reduce()

  return (
    <div className="creditCard" style={divStyle}>
      <img src={cardTypeImg} alt=""/>
      <p className="creditNum">{cardNum}</p>
      <div className="creditBottom">
        <p>Expires: {props.expirationMonth}/
        {props.expirationYear}  {props.bank}</p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;