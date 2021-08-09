import React from 'react';



function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const image = type === "Visa" ? "img/visa.png" : "img/master-card.svg";
    const hiddenNumber = `•••• •••• •••• ${number.slice(12, 16)}`;
    return (
        <div style = {{color:`${color}`, backgroundColor:`${bgColor}`}}>
        <img class="cclogo" src={image} alt="creditcard" />
        <p>{hiddenNumber}</p>
        <p>Expires {expirationMonth}/{expirationYear}    {bank}</p>
        <p>{owner}</p>
        </div>
    )
}

export default CreditCard;