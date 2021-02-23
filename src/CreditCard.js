import React from 'react'

export default function CreditCard(props) {
    const newNumber = "**** **** **** " + props.number.slice(-4);
    let month;
    if(props.expirationMonth < 10) {
        month = `0${props.expirationMonth}`;
    } else {
        month = props.expirationMonth;
    }

    return (
        <div style={{backgroundColor: `${props.bgColor}`, color: `${props.color}`, padding: '20px', width: '400px', borderRadius: '15px'}}>
            <img src={`{${props.bgColor}`} alt={""} />
            <p style={{textAlign: "right"}}>{props.type}</p>
            <h3 style={{fontSize: "26px"}}>{newNumber}</h3>
            <p style={{textAlign: "left"}}>Expires: {month}/{JSON.stringify(props.expirationYear).slice(-2)} <strong>{props.bank}</strong></p>
            <p style={{textAlign: "left"}}>{props.owner}</p>
        </div>
    )
}
