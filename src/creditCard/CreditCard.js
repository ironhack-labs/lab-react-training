import React from 'react'

export default function CreditCard(props) {
    let cardNum = props.number.slice(props.number.length-4)
    let expYear = props.expirationYear.toString().slice(props.expirationYear.toString().length-2)
    let expMonth = ''
    props.expirationMonth.toString().length === 1 ? expMonth = `0${props.expirationMonth}` : expMonth = props.expirationMonth
    return (
        <div className="credit-box" style={{backgroundColor: props.bgColor}}>
            <div className="card-type">
                <p>{props.type}</p>
            </div>
            <div className="card-num">
                <h1>**** **** **** {cardNum}</h1>
            </div>
            <div className="exp-and-bank">
                <p>{expMonth}/{expYear}</p>
                <p>{props.bank}</p>
            </div>
            <div className="card-owner">
                <p>{props.owner}</p>
            </div>
        </div>
    )
}
