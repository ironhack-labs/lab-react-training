import React from 'react'

export default function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const numberHidden = `.... .... .... ${number.slice(-4, number.length)}`
    const cardType = type === 'Master Card' ? '../img/master-card.svg' : '../img/visa.png'
    return (
        <div style={{ backgroundColor: bgColor, color: color, width: 400, height: 220, borderRadius: 10 }}>
            <h1 style={{ textAlign: "right", paddingRight: 20 }}><img src={cardType} alt={type} style={{ maxHeight: 20 }}></img></h1>
            <h2 style={{ fontSize: "3rem", margin: 0, textAlign: "left", paddingLeft: 40 }}>{numberHidden}</h2>
            <p style={{ textAlign: "left", paddingLeft: 10 }}>Expires {expirationMonth}/{expirationYear}&nbsp;&nbsp;&nbsp;{bank}</p>
            <p style={{ textAlign: "left", paddingLeft: 10 }}>{owner}</p>
        </div >
    )
}
