import React from 'react';
import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.svg';

function CreditCard(props) {

    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props

    const cutNumbers = (word, from) => {
        let array = ("" + word).split("")
        let showWord = array.slice(from, -1)
        return showWord.join("");
    }
    const monthFormat = (month) => { 
        if(("" + month).length < 2){
            return (`0${month}`)
        }else{
            return month
        }
    }

  return (
    <div className='visa' style={{backgroundColor: `${bgColor}`, color: `${color}`, borderColor: `${bgColor}`}}>
        {type === "Visa" ? <img src={visa} alt="visa"/> : <img src={masterCard} alt="master card"/>}
        <h2>**** **** **** {cutNumbers(number, -5)}</h2>
        <p>Expires {monthFormat(expirationMonth)}/{cutNumbers(expirationYear, -3)}    {bank}</p>
        <p>{owner}</p>
    </div>
  )

}

export default CreditCard;