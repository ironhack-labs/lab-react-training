import React from 'react';

export default function CreditCard(props) {
    let img = "/img/visa.png";
    if (props.type === 'Master Card') img = "/img/master-card.svg";
    return (
        <div className="CreditCard" style={{backgroundColor: props.bgColor, color: props.color}}>
            <div className="type">
                <img src={img} />
            </div>
            <div className="number">
                •••• •••• •••• {props.number.slice(-4)}
            </div>
            <div className="expires-bank">
                <span>Expires {props.expirationMonth.toString().padStart(2,0)}/{props.expirationYear}</span>
                <span className="bank">{props.bank}</span>
            </div>
            <div className="owner">
                {props.owner}
            </div>
        </div>
    )
}