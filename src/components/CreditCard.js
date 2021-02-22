import React from 'react'

export default function CreditCard(props) {
    return (
        <div>
            <h2>•••• •••• •••• {props.number.substr(-4)}</h2>
            <p>Expires: {props.expirationMonth}/{props.expirationYear}</p>
            <aside>{props.bank}</aside>
            <p>{props.owner}</p>
        </div>
    )
}
