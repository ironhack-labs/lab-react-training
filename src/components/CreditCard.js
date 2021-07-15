import React from 'react'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    let image = type === "Visa" ? "img/visa.png" : "img/master-card.svg";
    let hiddenNumber = `•••• •••• •••• ${number.slice(12, 16)}`;

    return (
        <div className="creditcard-container" 
        style={{
            color: `${color}`,
            backgroundColor: `${bgColor}`
        }}>
            <img src={image} alt="Creditcard"></img>
            <p className="creditcard-number">{hiddenNumber}</p>
            <p className="creditcard-details">Expires {expirationMonth}/{expirationYear}   {bank}</p>
            <p className="creditcard-details">{owner}</p>
        </div>
    )
}

export default CreditCard
 