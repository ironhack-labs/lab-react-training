import React from 'react';
import './index.css'
import credit from '../../assets/images/master-card.svg'
import visa from '../../assets/images/visa.png'

function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  
const lastNums = number.slice(12)

// let typeCard = ""
  
// if(type === "Visa") {
//     typeCard = "visa"
// } else {typeCard = "credit"}

const year = expirationYear.toString().slice(2)
let month = ""
if(expirationMonth.toString().length !==2) {
    month = '0' + expirationMonth
} else {month = expirationMonth}

    return (
        <div className='CreditCard' style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
            <div className='imageCard'>
             {/* <img src={typeCard === 'visa' ? visa : credit}/> */}
             <img src={type === 'Visa' ? visa : credit}/>
            </div>

            <p className='hiddenNums'><span>.... .... .... </span>{lastNums}</p>

            <div className='Dates'>
                <p>Expires {month}/{year}</p>
                <p className='nameBank'>{bank}</p>
            </div>

            <p>{owner}</p>
        </div>
    );
};

export default CreditCard;