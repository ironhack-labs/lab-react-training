
import React from 'react'
import './CreditCard.css'
import logoMasterCard from './master-card.svg'
import logoVisa from './visa.png'

export default function CreditCard(props) {


    function displayOnly4Digits (props) {
        const last4Digits =  props.number.toString().slice(-4)
        const circle = 	"\u2022"
        return `${circle.repeat(4)} ${circle.repeat(4)} ${circle.repeat(4)} ${last4Digits}`
    }

    function logoCreditCard (props) {
        if(props.type === 'Master Card') {
            return logoMasterCard
        } else if (props.type === 'Visa') {
            return logoVisa
        }
    }



    return (
        <div className='creditcard' style={{ backgroundColor: props.bgColor, color: props.color}} >
                <img src={logoCreditCard(props)} alt=''></img>
                <h3>{displayOnly4Digits(props)}</h3>
                <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
                <p>{props.owner}</p>
        </div>

    )
}
