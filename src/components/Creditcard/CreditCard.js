import React from 'react'
import './CreditCard.css'

export default function CreditCard(props) {

    const hiddenNumbers = (numbers) => {
        let numbersArr = numbers.toString().split('');
        let hiddenNumbersArr = numbersArr.map((elem, index) => index < 12 ? (elem = '·') : elem);
        let arrayWithSpaces = [];
        hiddenNumbersArr.forEach((elem) => 
            arrayWithSpaces.push(hiddenNumbersArr.splice(0, 4)));
        arrayWithSpaces.forEach((elem) => elem.push(' '));
        arrayWithSpaces = arrayWithSpaces.flat().join('');
        return arrayWithSpaces
    }

    return (
        <div className="card" style={{backgroundColor: props.bgColor, color: props.color}}>
            <div className="logo">
                <img src={props.cardImg} alt="img-logo" />
            </div>
            <span className="number">{hiddenNumbers(props.number)}</span>
            <div className="flex-row">
                <span className="expiration-date">
                    Expires {props.expirationMonth}/{props.expirationYear}
                </span>
                <span className="bank">{props.bank}</span>
            </div>
            <span className="owner">{props.owner}</span>
        </div>
    )
}
