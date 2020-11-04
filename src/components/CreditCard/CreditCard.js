import React from 'react';

import './CreditCard.css';

const CreditCard = (
    {
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color
    }
) => {

    const configExpirationMonth = (expirationMonth) => {
        let newExpirationMonth = expirationMonth.toString();
        if (newExpirationMonth.length === 1) {
            return `0${expirationMonth}`;

        } else {
            return newExpirationMonth;
        }
    }

    const setType = (type) => {
        if(type==="Master Card") {
            return '../../public/img/master-card.svg';
        }
        if(type==="Visa") {
            return './public/img/visa.png';
        }
    }

    return (
        <div className="credit-card-container" style={{ backgroundColor: bgColor }}>
            <img src={setType(type)} alt="type-icon"></img>
            <p style={{ color: color }}>
                ............
            {number[number.length - 4]}
                {number[number.length - 3]}
                {number[number.length - 2]}
                {number[number.length - 1]}
            </p>
            <p className="flex-credit-card">
                <p style={{ color: color }}>Expires {configExpirationMonth(expirationMonth)}/{expirationYear}</p>
                <p style={{ color: color }}>{bank}</p>
            </p>
            <p style={{ color: color }}>{owner}</p>
        </div>
    );
}

export default CreditCard;