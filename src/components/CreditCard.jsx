import React from 'react'
import './CreditCard.css'

function cardType(type) {
    if ( type === 'Visa') {
        return '/img/visa.png'
    } else {
        return '/img/master-card.svg'
    }
}

function CreditCard(props) {

    const cardStyle = {
        color: `${props.color}`,
        backgroundColor: `${props.bgColor}`,
    }

    return (
        <div style = {cardStyle} className='container-card'>
            <div className='img-card'>
                <img src={cardType(props.type)}/>
            </div>
            <div className='card-number'>
                <span>•••• •••• •••• {props.number.substr(-4)}</span>
            </div>
            <div className='card-text1'>
                <p> Expires {props.expirationMonth}/{props.expirationYear}<span>{props.bank}</span></p>
            </div>
            <div className='card-text2'>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}

export default CreditCard