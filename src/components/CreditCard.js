import React from 'react'
//import { ReactComponent as MasterCard } from "/img/master-card.svg"

export default function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    let shortNum = number.split("").splice(-4)
    const visaOrMaster = { "Visa": "./img/visa.png", "MasterCard": "./img/master-card.png" }
    return (
        <div className="cards" style={{ backgroundColor: bgColor, color: color }}>
            <div className="type"><img src={visaOrMaster[type]} alt="entity.png" /></div>
            <p className="number">************{shortNum}</p>
            <br />
            <p className="expiration">0{expirationMonth}/{expirationYear}   {bank}</p>
            <p className="owner">{owner}</p>
        </div>
    )
}
