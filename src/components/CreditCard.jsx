import React from 'react'
import "./../styles/CreditCard.css"

const CreditCard = (props) => {
    return (
        <div className="credit-card" style={{
            backgroundColor: props.bgColor,
            color: props.color
        }}>
        <img src={(props.type==="Visa")? "img/visa.png" : "img/master-card.svg"} alt="type of credit card"/>
        <h2>•••• •••• •••• {props.number.charAt(12)}{props.number.charAt(13)}{props.number.charAt(14)}{props.number.charAt(15)}</h2>
        <p>Expires {(props.expirationMonth<10)? `0${props.expirationMonth}` : props.expirationMonth}/{props.expirationYear}     {props.bank}</p>
        <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard
