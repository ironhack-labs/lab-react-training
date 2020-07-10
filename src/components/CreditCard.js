import React from 'react'

export default function CreditCard(props) {
    const style = {
        backgroundColor: props.bgColor,
        color: props.color
    }
    return (
        <div style={style}>
            <div>
                <img src={props.type} alt=""/>
            </div>
            <div>
                <h3>{props.number}</h3>
            </div>
            <div>
                <p>{props.expirationMonth} / {props.expirationYear}</p>
                <p>{props.bank}</p>
            </div>
            <p>{props.owner}</p>
        </div>
    )
}
