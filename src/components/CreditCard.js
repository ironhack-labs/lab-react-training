import React from "react";

import "./CreditCard.css";

import Visa from "../assets/images/visa.png";
import MasterCard from "../assets/images/master-card.svg";

const CreditCard = (props) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    const last4 = number.toString().slice(12);
    const url = type === "Visa" ? Visa : MasterCard;
    return (
        <div className="credit" style={{ backgroundColor: bgColor, color: color }} >
            <img className="credit-img" src={url} alt={type} />
            <h2 className="credit-number">···· ···· ···· {last4}</h2>
            <span className="credit-date">Expires {expirationMonth}/{expirationYear} </span>
            <span className="credit-bank">{bank}</span>
            <span className="credit-name">{owner}</span>           
        </div>
    );
};

export default CreditCard;