import React from 'react';

const CreditCard = (props) => {
    let secretNum = `**** **** **** ` + props.number.slice(-4);

    return (
        <div className="card" style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
            <div className="cardType">
                <p><b>{props.type}</b></p>
            </div>
            <div className="cardNum">
                <p>{secretNum}</p>
            </div>
            <div className="cardInfo">
                <p>Expires: {props.expirationMonth}/{props.expirationYear}<span>{props.bank}</span></p>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;