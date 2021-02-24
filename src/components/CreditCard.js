import React from 'react'

export default function CreditCard(props) {
    function security(number) {
        const numero = number

        return numero.split("").slice(11, 15)
    }

    return (
        <div style={{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
            <img width='50px' src={props.type==='Visa' ? '../img/visa.png' : '../img/master-card.svg'} />
            <p>************{security(props.number)}</p>
            <p>{props.expirationMonth}</p>
            <p>{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}
