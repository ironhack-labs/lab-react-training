import React from 'react'

const CreditCard = (props) => {
    const style = {
backgroundColor: props.bgColor,
color: props.color,
borderRadius: 10,
width: 300,
height : 150
}
    const visaStyle={
        textAlign: "right"
    }
    const pStyle={
        textAlign: "left", 
        margin : 10
    }

    return (
        <div style = {style}>
        <p style={visaStyle}>{props.type}</p>
        <h2>{props.number}</h2>
        <p style={pStyle}><span>Expires {props.expirationMonth}/{props.expirationYear}</span> <span>{props.bank}</span></p>
        <p style={pStyle}>{props.owner}</p>
        </div>
    )
}

export default CreditCard
