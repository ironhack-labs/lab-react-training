
import React from 'react'

export default function CreditCard(props) {
    console.log(props)

    function displayOnly4Digits (props) {
        const last4Digits =  props.number.toString().slice(-4)
        return last4Digits
    }

    console.log(displayOnly4Digits(props))

    return (
        <div style={{ backgroundColor: props.bgColor, color: props.color}}>
            <p>{props.type}</p>
            <h3><span>.... .... .... </span>{displayOnly4Digits(props)}</h3>
            <p>Exopires {props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}
