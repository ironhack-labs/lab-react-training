import React from 'react';

const CreditCard = ({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}) => (
    <div className="creditCard" style={{backgroundColor: `${bgColor}`}}>
        <div className="logo">
            <img src={setType(type)} alt="logo"></img>
        </div>
        <div className="number" style={{color: `${color}`}}>
            <span>•••• •••• •••• </span><span>{number.split('').splice(12,4)}</span>
        </div>
        <div className="data" style={{color: `${color}`}}>
            <pre>Expires {expirationMonth}/{expirationYear}   {bank}</pre>
            <pre>{owner}</pre>
        </div>
    </div>
)

function setType(type) {
    if(type==="visa") {
        return "img/visa.png";
    }
    else if(type==="mastercard"){
        return "img/master-card.svg";
    }
    else return "";
}

export default CreditCard;