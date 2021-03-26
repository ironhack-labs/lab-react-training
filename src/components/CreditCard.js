import React from 'react';
import '../assets/css/CreditCard.css';

const CreditCard = ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
}) => {
    
    const cardLogo = () => {
        if (type === 'Master Card') {
            return './img/master-card.svg'
        } 
        if (type === 'Visa') {
            return './img/visa.png'
        }
    }

    const hashedNumber = () => {
        let shownSubstr = number.toString().substring(number.length - 4, number.length);
        let hashedSubstr = number.toString().substring(0, number.length - 4).split('').map(hashedNum => hashedNum = '•').join('');
        return (hashedSubstr + shownSubstr).match(/.{1,4}/g).join(' ');
    }

    return (
        <div className='CreditCard' style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
            <img className='CardLogo' src={cardLogo()} />
            <h1 className='CardNumber'>{hashedNumber()}</h1>
            <div className='CardData'>
                <p><span className="CardDate">{expirationMonth}/{expirationYear}</span>{bank}</p>
                <p className="CardOwner">{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;