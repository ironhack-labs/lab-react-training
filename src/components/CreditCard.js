import React from 'react'
import '../assets/css/CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let logo
    if (type === 'Visa') {
        logo = './img/visa.png'
    } else {
        logo = './img/master-card.svg'
    }

    let code = '**** **** **** ' + number.substr(-4);

    if (expirationMonth < 10) {
        expirationMonth = '0' + expirationMonth
    }


    return (

        <div className="credit-card" style={{backgroundColor: bgColor, color: color}}>
            <img src={logo}></img>
            <div className="cardNumber">{code}</div>
            <p className="credit-data">Expires {expirationMonth}/{expirationYear} {bank} </p>
            <p className="credit-data">{owner}</p>
        </div>
    )
}



export default CreditCard