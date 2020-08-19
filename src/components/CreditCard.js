import React from 'react'

function CreditCard(props) {

    let divStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    };
    
    let hiddenNumber = props.number.slice(0, -4).replace(new RegExp("[0-9]", "g"), "*") + props.number.slice(-4)

    return (
        <div className="credit-card" style={divStyle}>
            {props.type === "Master Card" && <img className="credit-card-logo" src="/img/visa.png" alt=""/>}
            {props.type === "Visa" && <img className="credit-card-logo" src="/img/master-card.svg" alt=""/>}
            <p>{hiddenNumber}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}


export default CreditCard