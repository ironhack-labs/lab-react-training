import React from 'react'

export default function CreditCard(props) {
    console.log(props)
    const divStyle = {
        backgroundColor: `${props.bgColor}`,
        width: '300px',
        height: '150px',
        borderRadius: '10px',
        color: `${props.color}`,
        padding: '5px 10px',
        margin: '10px'
    }
    return (
        <div style={divStyle}>
            <p>{props.type}</p>
            <p>**** **** **** {props.number.slice(12)}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}
