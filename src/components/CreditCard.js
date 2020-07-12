import React from 'react'

function CreditCard(props) {

    const myStyle = {
        backgroundColor: props.bgColor,
        color:props.color
    }

    const cleanCCNumber = () => {
        return `•••• •••• •••• ${props.number[12]}${props.number[13]}${props.number[14]}${props.number[15]}`
    }

    const source = () => props.type === "Visa" ? "img/visa.png" : "master-card.svg"

    return (
        <div className="credit-card" style={myStyle}>
            <img className="cc-img" src={source()} />
            <span className="cc-number">{cleanCCNumber()}</span>
            <span className="cc-expires">Expires {props.expirationMonth}/{props.expirationYear}    {props.bank}</span>
            <span className="cc-name">{props.owner}</span>
        </div>
    )
}

export default CreditCard
