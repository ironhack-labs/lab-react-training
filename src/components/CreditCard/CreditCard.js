import React from 'react'
import './CreditCard.css'
import Visa from './../../assets/images/visa.png'
import MasterCard from './../../assets/images/master-card.svg'


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    const ocultNumberCard = (number) => {
        const strintToArray = number.split('')
        return strintToArray.map( (el, index) => { 
            index++
            if( index <= 12 ) el = '*'
            if( index % 4 === 0 && index !== 0) el = el + ' '
            return el
        }).join('')
    }

    return (
        <div id="creditCard" style={{ backgroundColor: bgColor, color: color }}>
            <img src={ type === 'Visa' ? Visa : MasterCard } alt=""></img>
            <div className="creditCard-number">{ocultNumberCard(number)}</div>
            <div className="creditCard-info">
                <div className="creditCard-info_block mt-3">
                    <p className="creditCard-date">Expires {expirationMonth}/{expirationYear} <span>{bank}</span></p>
                </div>
                <p className="creditCard-owner">{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard