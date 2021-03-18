import React from 'react'
import '../assets/css/CreditCard.css'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const cardLogo =() => {
        if(type==='Visa'){
            return <img src='/img/visa.png' alt='Visa logo' height='30'/>
        }
        else{
            return <img src='/img/master-card.svg' alt='Mastercard logo' height='40'/>
        }
    }

    const cardNumber = () => {
        if(type==='Visa'){
            return <h4 class='CardNum'><span className='CardPoints'>⚪ ⚪ ⚪ ⚪ </span><span className='CardPoints' >⚪ ⚪ ⚪ ⚪ </span><span className='CardPoints'>⚪ ⚪ ⚪ ⚪ </span> {number.slice(number.length - 4)}</h4>
        }
        else{
            return <h4 class='CardNum'><span className='CardPoints'>⚫ ⚫ ⚫ ⚫ </span><span className='CardPoints' >⚫ ⚫ ⚫ ⚫ </span><span className='CardPoints'>⚫ ⚫ ⚫ ⚫ </span> {number.slice(number.length - 4)}</h4>
        }
    }


    return (
      <div className='CreditCard' style={{ backgroundColor: bgColor, color: color }}>
         <div className='CardLogo'>
             {cardLogo(type)}
         </div>
         <div className='CardNumber'>
             {cardNumber(type)}
         </div>
         <div className='CardExpiration'>
            <p>Expires {expirationMonth} / {expirationYear}</p> 
            <p class='BankSpace'>{bank}</p>
         </div>
         <div className='CardOwner'>
            <p>{owner}</p> 
         </div>

      </div>
    )
  }

export default CreditCard