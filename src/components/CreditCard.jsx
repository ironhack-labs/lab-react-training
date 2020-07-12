import React from 'react'

export default function CreditCard(props) {

const numbers = [...props.number]

const lastNumbers = numbers.splice((numbers.length/4) * 3, (numbers.length/4) * 4)

    return (
        
        <div 
            className="CreditCard"
            style={{backgroundColor: `${props.bgColor}`,
                    color: `${props.color}` }}
        >
            <div className="CreditCard__type">
                <img src={props.type} alt="img"/>
            </div>
            <div className="CreditCard__number">
                <label className="number-secret"><span></span></label>

                <label>{lastNumbers}</label>
            </div>
            <div className="CreditCard__expire-cont">
                <label>Expires {props.expirationMonth}/{props.expirationYear}</label>
                <label>{props.bank}</label>
            </div>
            <div className="CreditCard__owner">{props.owner}</div>
        </div>
    )
}
