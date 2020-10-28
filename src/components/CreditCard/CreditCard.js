import React from 'react';
import './CreditCard.css';

const handleMonth = (month) => {
    
}

const CredirCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    return (
        <div className="ccard-container" style={{backgroundColor: bgColor}}>
            <div className="card-header">
                <img src={type === 'Visa' ? 'img/visa.png' : 'img/master-card.svg'} alt="credit card logo"/>
            </div>
            <div className="card-body" style={{color: color}}>
            •••• •••• •••• {number.slice(12, 16)}
            </div>
            <div className="card-footer" style={{color: color}}>
                <div className="upper-footer">
                    <p>Expires {expirationMonth[0] === 0 ? expirationMonth : `0${expirationMonth}`}/{JSON.stringify(expirationYear).slice(2, 4)}</p> <span>{bank}</span>
                </div>
                <div className="lower-footer">{owner}</div>
            </div>
        </div>
    )
}

export default CredirCard;