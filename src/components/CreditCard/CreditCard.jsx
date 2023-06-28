import React from 'react';
import './CreditCard.css';
import visa from './visa.png';
import masterCard from './masterCard.png';

function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

    let cardTypeImage;
    if (type === "Visa") {
        cardTypeImage = <img src={visa} alt="Visa" />;
    } else if (type === "MasterCard") {
        cardTypeImage = <img src={masterCard} alt="MasterCard" />;
    } else {
        cardTypeImage = null;
    }

    const last4Digits = number.slice(-4);

    return (
        <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
            {cardTypeImage}
            <h3>... ... ... {last4Digits}</h3>
            <p>
                Expires {expirationMonth}/{expirationYear} <br />
                {bank} <br />
                {owner}
            </p>
        </div>
    );
}

export default CreditCard;
