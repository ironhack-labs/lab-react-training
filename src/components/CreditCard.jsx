import React from 'react';
import './../views/CreditCard.css'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    return (
        <div 
        style={
            {backgroundColor: bgColor,
            color: color}
        }
        className="CreditCard">
            <img src={type === "Visa" ? '/img/visa.png' : '/img/master-card.svg'} alt=""/>
            <p className="creditNumber">•••• •••• •••• {number.slice(12)}</p>
            <p>Expires {expirationMonth}/{expirationYear.toString().slice(2)} <span>{bank}</span></p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard
