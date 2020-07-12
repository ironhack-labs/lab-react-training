import React from 'react'

function CreditCard(props) {

    const myStyle = {
        backgroundColor: props.bgColor,
        color:props.color
    }

    const source = () => props.type === "Visa" ? "img/visa.png" : "master-card.svg"

    // type="Visa"
    // number="0123456789018845"
    // bank="BNP"
    // owner="Maxence Bouret"
    // expirationMonth={3}
    // expirationYear={2021}

    return (
        <div 
            className="credit-card"
            style={myStyle}>
            <img style={{width:"50px"}} src={source()} />
            {props.number}
            {props.bank}
            {props.owner}
            {props.expirationMonth}
            {props.expirationYear}
        </div>
    )
}

export default CreditCard
