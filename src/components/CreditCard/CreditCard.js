import React from "react";
import '../Greetings/Greetings.css';
import './visa.png'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
      };

/* const VisaMaster = (type) => {
    if(type === "Visa"){
        console.log(type)
        return './visa.png'
    } 
    else {
        console.log(type)
     return './mastercard.svg'
    } 
} */
  return (
    <div className="allGreetings allCredit" style={divStyle}>
    <div className="firstBlock">
    <img src={type === "Visa" ? '' : ''} widht="5px" alt="" />
   </div>
   <div className="secondBlock">
   {type === "Visa" ? '../public/img/visa.png' : '/mastercard.svg'} 
   {number}
   </div>
   <div>
<p>Expires {expirationMonth+'/'+expirationYear}</p>
<p>{bank}</p>
<p>{owner}</p>
</div>
    </div>
  );
};

export default CreditCard;