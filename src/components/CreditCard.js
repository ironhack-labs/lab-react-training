import React from 'react'

// type="Visa"
// number="0123456789018845"
// expirationMonth={3}
// expirationYear={2021}
// bank="BNP"
// owner="Maxence Bouret"
// bgColor="#11aa99"
// color="white" 

export default function CreditCard(props) {
    const cardType = {
        "Visa": "/img/visa.png",
        "Master Card": "/img/master-card.svg"
    }
    const number = (props) => {
        let result = '';
        for (let i = 0; i < props.number.length; i++) {
            if ((i % 4) === 0) {
                result += " "
            }
            if (i >= props.number.length - 4 && i <=  props.number.length) {
                result += props.number.charAt(i);
            }
            else {
                result += '•'
            }
        }
        return result;
    }
    const style = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }

    return (
        <div className="credit-card" style={style}>
            <div className="card-type">
                <img src={cardType[props.type]} alt="card logo"/>
            </div>
            <p className="card-number">{number(props)}</p>
            <p className="expiration-date">Expires: {props.expirationMonth}/{props.expirationYear} <span>{props.bank}</span></p>
            <p className="owner">{props.owner}</p>

        </div>
    )
}
