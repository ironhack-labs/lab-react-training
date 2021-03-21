import React from 'react';
import '../assets/css/CreditCard.css'


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
    function hideNumber() {
        let r = 0
        for (let i = 0; i < 3; i++) {
            let n = number.length
            r += number[(n - 1) - i];
        }
        return r;
    }
    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
    }
    return (
        <div className='CreditCard' style={divStyle}>
            <h3 className='CreditCardType'>{type}</h3>
            <h1>{`•••• •••• •••• ${hideNumber()}`}</h1>
            <div>
                <div className='CreditCardExpires'>
                    <p>Expires {expirationMonth}/{expirationYear} </p>
                    <p>{bank}</p>
                </div>
            </div>
            <p className='CreditCardOwner'>{owner}</p>

        </div>)
}
export default CreditCard;

