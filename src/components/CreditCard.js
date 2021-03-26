import React from 'react'
import '../assets/css/CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const logo = () => {
        if (type === "Visa") {
            return <img className="w-25" src="../../img/visa.png" alt="Visa" />
        } else {
            return <img className="w-25" src="../../img/master-card.svg" alt="Master-Card" />
        }
    }

    const cardNumber = () => {
        if (type === "Visa") {
            return <p><span>⚪ ⚪ ⚪ ⚪</span><span>⚪ ⚪ ⚪ ⚪</span><span>⚪ ⚪ ⚪ ⚪</span><span className="cardNumber">{ number.slice(12) }</span></p>
        } else {
            return <p><span>⚫ ⚫ ⚫ ⚫</span><span>⚫ ⚫ ⚫ ⚫</span><span>⚫ ⚫ ⚫ ⚫</span><span className="cardNumber">{ number.slice(12) }</span></p>
        }
    }

    return (
        <div className="CreditCard container" style={{backgroundColor: bgColor, color: color}}>
            <div className="logoImg">{logo(type)}</div>
            <div className="mt-4">{cardNumber(number)}</div>
            <div className="d-flex">
                <p>Expires {expirationMonth}/</p> <p>{expirationYear}</p>
                <p><span className="bankCard">{bank}</span></p>
            </div>
            <div>{owner}</div>
        </div>   
    )
}

export default CreditCard