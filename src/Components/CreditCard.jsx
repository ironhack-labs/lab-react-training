import React from 'react'

function CreditCard(props) {
    return (
        <div style={{backgroundColor: props.bgColor, color: props.color, borderRadius:15}}>
            <div>{props.type}</div>
            <div>{props.number}</div>
            <div>{props.expirationMonth}</div>
            <div>{props.expirationYear}</div>
            <div>{props.bank}</div>
            <div>{props.owner}</div>
        </div>
    )
}

export default CreditCard
