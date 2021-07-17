import React from 'react';

function CreaditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    let image = type === "Visa" ? "img/visa.png" : "img/master-card.svg";
    let hiddenNumber = `•••• •••• •••• ${number.slice(12, 16)}`;

    return (
        <div className="creaditcard-container" style={{
            color=`${color}`,
            backgroundColor = `${bgColor}`
        }}>
            <img src={image} alt="Creditcard"></img>
            <p className="credicard-number">{hiddenNumber}</p>
            <p className="credicard-details">Expires {expirationMonth}/{expirationYear}  {bank}</p>
            <p className="credicard-details">{owner}</p>
        </div>

    )
}

