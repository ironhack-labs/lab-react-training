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
            <div>
                <img src={props.cardImg} alt="img-logo" />
            </div>
            <span>{hiddenNumbers(props.number)}</span>
            <div>
                <span>
                    Expires {props.expirationMonth}/{props.expirationYear}
                </span>
                <span>{props.bank}</span>
            </div>
            <span>{props.owner}</span>
        </div>
    )
}
