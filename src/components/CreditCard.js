import React from 'react'
import './CreditCard.css';


export default function CreditCard(props) {
    const cardStyle = {
        background: `${props.bgColor}`,
        color: `${props.color}`
    }



    return (
        <div style={cardStyle} className="credit-card">
            <div>
                {props.type === "Visa" ? <img src="/img/visa.png" className="logo" alt="visa" /> : <img className="logo" src="/img/master-card.svg"  alt="master-card"/>}
            </div>
            <div>
            <p><strong>•••• •••• •••• {props.number.substring(12)}</strong></p>
            </div>
            <div>
                <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
                <p>{props.owner}</p>
            </div>

        </div>
    )
}
