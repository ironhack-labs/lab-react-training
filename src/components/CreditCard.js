import React from 'react';
import './Components.css'
export default function CreditCard(props) {
    console.log(props)
let creditCardNumber = '•••• •••• ••••' + props.number.slice(-4);

    return (
        <div className="creditCard">
        <p>{props.type}</p>
        <p>{creditCardNumber}</p>
        <p>{props.expirationMonth}/ {props.expirationYear}</p>
        <p>{props.owner}</p>
        </div>
    )
}


// type: A string that can be "Visa" or "Master Card"
// number: A string that is a number of the credit card. You will only display the 4 last digits for security reasons 😉
// expirationMonth: A number that represents the month, between 1 and 12
// expirationYear: A number that represents the year
// bank: A string that represents the name of the bank
// owner: A string that represents the name of the owner
// bgColor: A string for the background color of the card
// color: A string for the text color of the card