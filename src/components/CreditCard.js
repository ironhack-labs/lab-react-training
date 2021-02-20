import React from 'react'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    return (
        <div style={{backgroundColor: {bgColor}, border: '1px solid black', width:200, height:200 }} >
            <h4>{type}</h4>
            <p>**** **** **** {number.slice(12)}</p>
            <br/>
            <p>Expires {expirationMonth}/{expirationYear}    <span>{bank}</span></p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard
