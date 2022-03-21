import React from "react";
import './CreditCard.css';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const creditCardNumber = '**** **** ****' + number.slice(-4);
    return(
        <div 
            className = "card"
            style={{
                backgroundColor: `${bgColor}`, 
                color: `${color}`
            }}>
            <div>
                <h3 className="logoCard">{type}</h3>
                <p>{creditCardNumber}</p>
            </div>
            <div>
                <h3>Expires</h3>
                <p>{expirationMonth}/{expirationYear} {bank}</p>
            </div>
            <div>
                {owner}
            </div>
        </div>
    )
};

export default CreditCard;