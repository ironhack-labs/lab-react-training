import React from 'react'

export default function CreditCard(props) {
    function cardNumber(Number){
        return <p>•••••••••••{Number.slice(12, 17)}</p>
    }
    
    return (
        <div>
            <p>{props.type}</p>
            {cardNumber(props.number)}
            <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}
