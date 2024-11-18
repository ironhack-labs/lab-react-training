import React from 'react'
import visa from  '../assets/images/visa.png'
import masterCard from '../assets/images/master-card.svg'

/* eslint-disable react/prop-types */
function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props


    return (
        <div className="creditCard" style={{color: color, backgroundColor: bgColor}}>
            <img src={type == 'Visa' ? visa : masterCard} className='cc'></img>
            <p style={{fontSize: '25px', margin: '10px 0'}}>{"•••• •••• •••• " + number.slice(-4)}</p>
            <p style={{textAlign: 'start'}}>Expires {expirationMonth}/{expirationYear.toString().slice(-2)}      
                <span style={{paddingLeft: '20px'}}>{bank}</span>
            </p>
            <p style={{textAlign: 'start'}}>{owner}</p>
        </div>
    )
}

export default CreditCard