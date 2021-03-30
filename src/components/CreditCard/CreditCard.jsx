import React from 'react'
import './CreditCard.scss'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const cardStyle = {
        backgroundColor: bgColor,
        color
    }

    const cardNumber = (n) => {
        return '●●●● ●●●● ●●●● ' + n.slice(-4)
    }

    const cardImg = (type) => {
        return type === 'Visa' ? 'visa.png' : 'master-card.svg'
    }

    return (
        <div className='CreditCard' style={cardStyle}>
            <img src={'/img/' + cardImg(type)} height={23} alt={type}/>
            <div className='cardNumber'>{ cardNumber(number) }</div>
            <div className='cardFooter'>
                <div>Expires { expirationMonth }/{ expirationYear } <span>{ bank }</span></div>
                <div>{ owner }</div>
            </div>
        </div>
    )
}

export default CreditCard
