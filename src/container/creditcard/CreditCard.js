import React from "react";
import "./CreditCard.css";
import visa from "./../../assets/images/visa.png";
import masterCard from "./../../assets/images/master-card.svg";

const CreditCard = ( {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} ) => {
    let cardType;
    let flagWidth;
    let flagHeight;

    switch (type) {
        case "Visa":
            cardType = visa;
            flagWidth = "53px";
            flagHeight = "22px";
            break;
        case "Master Card":
            cardType = masterCard;
            flagWidth = "35px";
            flagHeight = "20px";
            break;
        default:
            console.log("Card not found!");
    };

    let month;

    if (expirationMonth.toString().length > 1) {
        month = expirationMonth;
    } else {
        month = `0${expirationMonth}`;
    };

    return (
        <div style={{backgroundColor: bgColor, color: color}}>
            <div className="card-flag">
                <img src={cardType} alt={`${type} flag`} style={{width: flagWidth, height: flagHeight}} />
            </div>
            <h1>•••• •••• •••• {number.slice(12)}</h1>
            <p>
                Expires {month}/{expirationYear.toString().slice(2)}&emsp;&ensp;{bank}<br />
                {owner}
            </p>
        </div>
    );
};

export default CreditCard;