import React from 'react';

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    type = type.toLowerCase().split(' ').join('-')
    let ext = '.png';
    if(type !== 'visa') ext = '.svg'
    
    let visaHidden = '•••• •••• •••• '

    return(
        <article style={{backgroundColor: bgColor}}>
            <div>
                <img src={'/img/' + type + ext} alt=""></img>
            </div>
            <div>
                <p style={{color}}>{visaHidden + number.slice(-4)}</p>
            </div>
            <div style={{color}}>
                <p>Expires {expirationMonth}/{expirationYear} <span className="card-bank">{bank}</span></p>
                <p>{owner}</p>
            </div>


        </article>

    )
}

export default CreditCard;