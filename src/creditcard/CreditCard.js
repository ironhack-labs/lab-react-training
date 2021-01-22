import React from 'react';
import './CreditCard.css';

const CreditCard = props => {
    const creditCardStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`,
    }

    // let imgURl;

    // if (props.type === "Visa"){
    //     imgURL = ''
    // }

    // if (props.type === "Master Card"){
    //     imgURL = ''
    // }

    return (
        <div style={creditCardStyle} className="creditCard">
            <p type={"Visa" || "MasterCard"}>{props.type}</p>
            <p>**** **** **** {props.number.slice(12,16)}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear}</p><p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard;