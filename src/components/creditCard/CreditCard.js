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
        "Master Card": "/assets/images/master-card.svg"
    }
    const divStyle = {
        backgroundColor: bgColor, //#eeeeee
        color: color, //#222222
        //width: 300,//by default it will be in px
    }
    
    // function to splice the last 4 items
   const validNumber = number.toString().slice(-4);
 console.log(expirationMonth.toString())
 console.log(expirationYear.toString())
   const month = `0${expirationMonth}`.slice(-2)
   const year = `${expirationYear}`
   console.log(typeof year, year)

    return(
      <div className="creditCard-wrapper">
        <div className="creditCard-item" style={divStyle}>
          <img src={typeIcon[type]} alt="" />
          <p className="cardNumber">•••• •••• •••• {validNumber}</p>
          <p>Expires {month}/{year}<span>{bank}</span></p>
          <p>{owner}</p>
        </div>
      </div>
        
    )
}

export default CreditCard;