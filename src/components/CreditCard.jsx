import React from 'react';
import './CreditCard.css';

function CreditCard (props) {
    const { type, owner, number, expirationYear, expirationMonth, color, bgColor, bank } = props;
    const hide = '**** **** **** ' + number.slice(-4)

    
    const expDate = (`${expirationMonth}/${expirationYear}`)

    const divStyle = {
        color: color,
        backgroundColor: bgColor
    }

    return (
        <div style={divStyle} className="credit">
            <div className='visa'>
                <div><h2>{type}</h2></div>
            </div>
            
            <div><h1>{hide}</h1></div>

            <div className='raw'>
                <div><p>Expires {expDate}</p></div>
                <div><p className='push'>{bank}</p></div>
            </div>
            
            <div><p>{owner}</p></div>
        </div>
    )
}
export default CreditCard

