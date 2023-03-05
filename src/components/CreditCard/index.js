import React from 'react';
import './index.css'
import credit from '../../assets/images/master-card.svg'
import visa from '../../assets/images/visa.png'

function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  
const lastNums = number.slice(12)  
// const image = {} 
// if({type} === "Visa") {
//     image = {visa}
// } else {image = {credit}}

// const year = expirationYear.slice(2)

    return (
        <div className='CreditCard' style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
            <div className='imageCard'>
             <img src={visa}/>
            </div>
            <div className='numbersCard'>
            <span>.... .... ....</span>
            <p>{lastNums}</p>
            </div>
            
            <div>
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p className='nameBank'>{bank}</p>
            </div>
            <p>{owner}</p>
        </div>
    );
};

export default CreditCard;