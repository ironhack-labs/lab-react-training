import React from "react";
import '../Greetings/Greetings.css';
import './visa.png'
import './CreditCard.css'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
      };

  return (
    
    <div className="allGreetings allCredit" style={divStyle}>
    
    <div className="firstBlock">
    <img src={type === "Visa" ? "/img/visa.png" : '/img/master-card.svg' } width='40px' heigt='20px'alt="" />
   </div>
   <div className="secondBlock">
{/*    {type === "Visa" ? '../public/img/visa.png' : '/mastercard.svg'}  */}
   {"**** ***** **** " + number.slice(-4)}
   </div>
   <div className= "thirdBlock">
<p>Expires {(expirationMonth.toString().length === 1 ? "0"+expirationMonth : expirationMonth)+'/'+expirationYear.toString().slice(-2)}</p>     <p>{bank}</p>
</div>
<div className= "fourthBlock" >
<p>{owner}</p>
</div>
    </div>
  );
};

export default CreditCard;