import React, { Component } from 'react';


const  CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {  
    let imgSrc = '';
    type === 'Visa' ? imgSrc = '/img/visa.png' : imgSrc = '/img/master-card.svg';
    
    expirationMonth < 10 ? expirationMonth = `0${expirationMonth}` : expirationMonth = `${expirationMonth}`;
    expirationYear = expirationYear.toString().substring(2);
    
    const divStyle = { 
        backgroundColor: `${bgColor}`,
        color: `${color}`
    };

    let sensNumber = `•••• •••• •••• ${number.toString().substring(12)}`

    return (
        <div className='credit-card' style={divStyle}>
            <p className='type'><img src={imgSrc} alt={type} /></p>
            <p className='number'>{sensNumber}</p>
            <p><span>{expirationMonth} / {expirationYear}</span> <span>{bank}</span></p>
            <p className='owner'>{owner}</p>
        </div>
    )            
}

export default CreditCard;
