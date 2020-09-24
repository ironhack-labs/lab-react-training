import React from 'react'
import './CreditCard.css';

const CreditCard = (props) => {
    const { type,
            number,
            expirationMonth,
            expirationYear,
            bank,
            owner,
            bgColor,
            color } = props;

    const divStyle = {
        backgroundColor: bgColor,
        color
    };

    const expirationMonthString = expirationMonth.toString().length < 2 
                        ? '0' + expirationMonth.toString() 
                        : expirationMonth.toString();

    return (
        <div className="CreditCard" style={divStyle}>
            <div className="type">
                <img src={type === "Visa" ? "./img/visa.png" : "./img/master-card.svg"} alt="card type"/>
            </div>
            <div className="number">
                •••• •••• •••• {number.slice(-4)}
            </div>
            <div className="expires-bank">
                <span>
                    "expires" {expirationMonthString}/{expirationYear.toString().slice(-2)}
                </span>
                <span className="bank">{bank}</span>
            </div>
            <div className="owner">{owner}</div>
        </div>
    );
};

export default CreditCard;
