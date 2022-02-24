import React from "react";
import './CreditCard.css';

function CreditCard(props) {

    const {
        type, 
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color
    } = props;

    return (
        <div className="CreditCard" style={{backgroundColor: bgColor, color: color}}>
            <div className="container-logo">
                <p>{ type }</p>
            </div>
            <div>
                <h3>**** **** **** { number.slice(number.length - 4) }</h3>
            </div>
            <div>
                <div className="container-left">
                    <p>Expires { expirationMonth }/{expirationYear }</p>
                    <p>{ bank }</p>
                </div>
                <div className="container-left">
                    <p>{ owner }</p>
                </div>
            </div>
        </div>
    );
}

export default CreditCard;