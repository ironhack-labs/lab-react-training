import React from 'react'
import './CreditCard.scss'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    const secretNumber = (number) => {
        return `oooo  oooo  oooo  ${number.slice(12)}`
    }
    return (
        <div className="CreditCard" style={{backgroundColor: bgColor, color}}>
            <div className="logo-credit">
            {
                type === 'Visa'
                ? <img src='/images/creditCards/visa.png' alt="Visa" />
                : <img src='/images/creditCards/master-card.png' alt="Master Card" />
            }
            </div>
            <div className="mumber-credit">
                {secretNumber(number)}
            </div>
            <div>
                <p>Expires {expirationMonth} / {expirationYear}</p>
                <p>{bank}</p>
            </div>
            <div>
                {owner}
            </div>
        </div>
    )
}

export default CreditCard
