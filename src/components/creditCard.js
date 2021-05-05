import React from 'react';

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    type = type.toLowerCase().split(' ').join('-')
    let ext = '.png';
    if(type !== 'visa') ext = '.svg'
    
    let visaHidden = '•••• •••• •••• '

    return(
        <article className="credit-card-container" style={{backgroundColor: bgColor}}>
            <div className="logo-container">
                <img className="card-logo" src={'/img/' + type + ext} alt=""></img>
            </div>
            <div className="number-container">
                <p className="card-number" style={{color}}>{visaHidden + number.slice(-4)}</p>
            </div>
            <div className="details-container" style={{color}}>
                <p className="card-expiration">Expires {expirationMonth}/{expirationYear} <span className="card-bank">{bank}</span></p>
                <p className="card-owner">{owner}</p>
            </div>


        </article>

    )
}

export default CreditCard;