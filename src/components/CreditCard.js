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
        <div style={{backgroundColor:`${props.bgColor}`, padding: "15px", width: "350px", fontSize: "20px", borderRadius: "15px"}}>
            <p style={{textAlign: "right"}}>{props.type}</p>
            <p style={{fontSize: "26px"}}>{newNumber}</p>
            <p style={{textAlign: "left"}}>Expires {month}/{JSON.stringify(props.expirationYear).slice(-2)} {props.bank}</p>
            <p style={{textAlign: "left"}}>{props.owner}</p>
        </div>
    )
}
