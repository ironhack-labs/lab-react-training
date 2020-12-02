import React from 'react';

export default function CreditCard(props) {
    const style = {
        backgroundColor: props.bgColor,
        color: props.color
    }

    return (
        <div style={style}>
            <p>Number **** **** **** {props.number.slice(12)}</p>
            <span>Expires {props.expirationMonth}/{props.expirationYear}</span>
            <span>{props.bank}</span>
            <span>{props.owner}</span>
        </div>
    )
}
