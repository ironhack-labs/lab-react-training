import React from 'react';
import '../components/CreditCard.css'

const CreditCard = (props) => {
    console.log(props);
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    let cardLogo;
    type === "mastercard" ? cardLogo = process.env.PUBLIC_URL + '/img/master-card.svg' : cardLogo = process.env.PUBLIC_URL + '/img/visa.png'
    return <div id="creditCardDiv" style ={{ backgroundColor:bgColor, color: color }}>
       <img src={cardLogo}/>
        <h2>•••• •••• •••• {number.slice(-4)}</h2>
        <div>Expires {expirationMonth.padStart(2,'0')}/{expirationYear.slice(-2)} <span>{bank}</span></div>
        <div>{owner}</div>
    </div>
}

export default CreditCard