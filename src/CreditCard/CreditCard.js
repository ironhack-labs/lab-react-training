import React from 'react';
import MasterCard from './master-card.svg'
import Visa from './visa.png'

function CreditCard(props){
let cardIcon = new Image()
    cardIcon.src =''

 if(props.type === 'Master Card'){
    cardIcon.src = MasterCard
 } else {
    cardIcon.src = Visa
 }

const cardNumber = props.number.replace(/\d{12}(\d{4})/, "************$1")

    return(
        <div className='credit-card' style={{ backgroundColor: props.bgColor, color: props.color}}>
        <div className='card-image'><img src={cardIcon.src} alt='card-icon'/></div>
        <h2>{cardNumber}</h2>
        <p>Expires {props.expirationMonth}/ {props.expirationYear}</p>
        <p>{props.bank}</p>
        <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard