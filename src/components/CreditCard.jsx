import React from 'react'

const CreditCard = (props) => {
    var brand = "";
    if (props.type === "Visa") {
        brand = "/img/visa.png"
    }
    if (props.type === "Master Card") {
        brand = "/img/master-card.svg"
    }
    const number = props.number.slice(12);
    const year = props.expirationYear.toString().split('').slice(2).join('');

    return (
        <div style={{backgroundColor: props.bgColor, color: props.color}}>
            <div><img src={brand} alt="brand image"/></div>
            <div>xxxx xxxx xxxx {number} </div>
            <div>expires {props.expirationMonth}/{year} {props.bank}</div>
            <div>{props.owner}</div>
        </div>
    )
}

export default CreditCard
