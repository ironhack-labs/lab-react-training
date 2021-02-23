import React from 'react'
import Card from 'react-credit-cards'
import './CreditCard.css'
import 'react-credit-cards/es/styles-compiled.css'

export default function CreditCard(props) {
    const maskCard = (num) => {
        return `${'•'.repeat(num.length - 4)}${num.substr(num.length - 4)}`;
      }
    return (
        <div className='creditCards'>
            <Card 
            name={props.owner}
            number={maskCard(props.number)}
            expiry={props.expirationMonth+'/'+props.expirationYear}
            issuer={props.type}
            preview={true}
            cvc={props.cvc}
            />
        </div>
    )
}
