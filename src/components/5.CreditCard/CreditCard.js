import React from 'react'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    const secretNumber = (number) => {
        return `oooo oooo oooo ${number.slice(12)}`
    }
    return (
        <div className="CreditCard" style={{backgroundColor: bgColor, color}}>
            <div>
            {
                type === 'Visa'
                ? <img src='url' alt="Visa" />
                : <img src='url' alt="Master Card" />
            }
            </div>
            <div>
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
