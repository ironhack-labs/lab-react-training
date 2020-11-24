import React from 'react'
import "./CreditCard.css";

const CreditCard = ({ creditCard }) => {

    const creditStyle = {
        backgroundColor: `${creditCard.bgColor}`,
        color: `${creditCard.color}`,
    };

    return (
    
        <div className="credit-card-container">
        <article key ={creditCard.number} className="cc-div" style={creditStyle}>
            <img src={creditCard.picture} className="cc-image" alt="credit-card-img"/>
                <div className="cc-p-tag">
                    <p>{creditCard.number}</p>
                    <p>Expires {creditCard.lastName}</p>
                    <p>{creditCard.bank}</p>
                    <p>{creditCard.owner}</p>
                    <p>{creditCard.birth}</p>
                </div>
        </article>
        </div>
    );
};

export default CreditCard;