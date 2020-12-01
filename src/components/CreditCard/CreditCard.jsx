import React from 'react'
import "./CreditCard.css"

const CreditCard = (props) => {
    const cardNumber = (props.number).split("").slice(12).join("").toString()
    return (
        <div className="all"> 
        <div className="credit" style={{
            backgroundColor: `${props.bgColor}`,
            color: `${props.color}`
        }}>
            <p>{props.type}</p>
            <h3> XXXX XXXX XXXX {cardNumber}</h3>
            <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
        </div>
    )
}

export default CreditCard
