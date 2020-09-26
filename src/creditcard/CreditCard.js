import React from 'react'

export default function CreditCard(props) {
    const divStyle = {
        backgroundColor: props.bgColor,
        color: props.color,
      };

    return (
        <div style={divStyle}>
            <div>{props.type}</div>
            <div>•••• •••• •••• {props.number.slice(-4)}</div>
            <div>Expires {props.expirationMonth}/{props.expirationYear.toString().slice(-2)}</div>
            <div>{props.bank}</div>
            <div>{props.owner}</div>
            <br></br>
        </div>
    )
}