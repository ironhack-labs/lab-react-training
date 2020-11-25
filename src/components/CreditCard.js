import React from 'react'
import "../components/cssComponents/CreditCard.css";

function CreditCard(props) {
    return (
        <div className="credit-card" style={{backgroundColor:`${props.bgColor}`, color:`${props.color}`}}>
            <div>
                <p>{props.type}</p>
                <p>{props.number}</p>
                <span>Expires{props.expirationMonth}/{props.expirationYear} {props.bank} </span>
                <p>{props.owner}</p>
            </div>
            
        </div>
    )
}

export default CreditCard
