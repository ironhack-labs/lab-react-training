import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
    let style = {
        backgroundColor: `#${props.bgColor}`,
        color: `#${props.textColor}`
    }
    return(
        <div className="credit-card" style={style}>
            <p type={"Visa" || "MasterCard"}>{props.type}</p>
            <p>{'**** **** **** ' + props.number.slice(12,16)}</p>
            <p>Expires: {props.expirationMonth < 10 ? '0' + props.expirationMonth.toString() : props.expirationMonth.toString()}/{props.expirationYear.toString().slice(2,4)}</p>
            <p>{props.bankName}</p>  
            <p>{props.owner}</p>       
        </div>
    )
}

export {CreditCard};