import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const {
    type, 
    number, 
    expirationMonth, 
    expirationYear, 
    bank, 
    owner,
    bgColor,
    color
  } = props;

  const typeIcon = {
    Visa: "/assets/images/visa.png",
    "Master Card": "/assets/images/master-card.svg",
  }
  const divStyle = {
      backgroundColor: bgColor, //#eeeeee
      color: color, //#222222
      //width: 300,//by default it will be in px
  }
  
  //console.log(typeof number) // string
  const validNumber = number.slice(-4); // take last 4 items
  //console.log(typeof expirationMonth, 'expirationMonth')// number -> convert to string
  //console.log(typeof expirationYear, 'expirationYear') // number

  // number --> 'string'
  // expirationMonth and expirationYear are 'numbers' -> put into '' or `` to convert into 'string'
  const month = `0${expirationMonth}`.slice(-2) // take the last 2 items -> 012 will take 12
  const year = `${expirationYear}`
  //console.log(typeof year, year)

  return (
    <div className="creditCard-wrapper">
      <div className="creditCard-item" style={divStyle}>
        <img src={typeIcon[type]} alt="" />
        <p className="cardNumber">•••• •••• •••• {validNumber}</p> 
        {/* use -> control command space -> to add icons or emicotons */}
        <p>Expires {month}/{year}<span>{bank}</span></p>
        <p>{owner}</p>
      </div>
    </div>  
  )
}

export default CreditCard;