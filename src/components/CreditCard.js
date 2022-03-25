import React from "react";

import "./CreditCard.css";

import Visa from "../assets/images/visa.png";
import MasterCard from "../assets/images/master-card.svg";

const CreditCard = (props) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    const last4 = number.toString().slice(11);
    const url = type === "Visa" ? Visa : MasterCard;
    return (
        <div className="credit" style={{ backgroundColor: bgColor, color: color }} >
            <img src={url} alt={type} />
            <h2>···· ···· ···· {last4}</h2>
            <div>
                <div>
                    <span>Expires {expirationMonth}/{expirationYear}</span>
                    <span>{bank}</span>
                </div>
                <span>{owner}</span>
            </div>
            
        </div>
    );
};

export default CreditCard;