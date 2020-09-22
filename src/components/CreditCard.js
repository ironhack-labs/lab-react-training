import React from 'react';
import './Components.css'
export default function CreditCard(props) {
    console.log(props)
let creditCardNumber = '•••• •••• ••••' + props.number.slice(-4);
let year = props.expirationYear.toString().slice(2)

let month = (props.expirationMonth.toString().length === 1 ? '0' + props.expirationMonth : props.expirationMonth)

let divStyleCreditCard = {
    'background-color': props.bgColor,
    color: props.color
     };
 

    return (
        <div className="creditCard" style={divStyleCreditCard}>
        <p>{props.type}</p>
        <p id="creditNumber">{creditCardNumber}</p>
        <div className="creditCardText">
        <p className="creditCardPtag">Expires {month}/{year}  {props.bank}</p>
        <p className="creditCardPtag">{props.owner}</p>
        </div>
        </div>
    )
}

