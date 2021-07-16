import React from 'react'

export default function CreditCard(props) {
    const {bgColor, color} = props
    const style = {
        backgroundColor: bgColor,
        color: color,
        display: 'flex',
        width: '17rem',
        flexDirection: 'row',
        borderRadius: '15px'
    }

    return (
        <div style={style}>
            <div>
                <p>{props.type}</p>
            </div>
            <div>
                <p>{props.number}</p>
            </div>
            <div>
                <p>Expiration Date: {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
            </div>
                <p>{props.owner}</p>
        </div>
    )
}
