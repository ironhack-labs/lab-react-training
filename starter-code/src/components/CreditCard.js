import React from 'react';

const CreditCard = props => {
    return (
        <div className = "CreditCard" style={{color: props.color, background: props.bgColor}}>
            <div className="type"> {
                props.type === "Visa" ? 
                  <img alt="" src="/img/visa.png"></img> 
                : <img alt="" src="/img/master-card.svg"></img> 
                }
            </div>
            <div className="number">{props.number}</div>
            <div className="bank">Expires {props.expirationMonth}/{props.expirationYear}    {props.bank}</div>
            <div className="bank">{props.owner}</div>
        </div>
    )
}

export default CreditCard;