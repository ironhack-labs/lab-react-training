import React from 'react'

const CreditCard = (props) => {
    const type = (card) => {
        if (props.type === 'Visa') {
            return './img/visa.png';
        } else {
            return './img/master-card.svg';
        }
    };

    const hideNumbers = (number) => {
        return number.replace(/\d{12}(\d{4})/, "•••• •••• •••• $1");
        };
    
    
    const expYear = (number) => {
        return number.toString().slice(-2)
    }


    return (
        <div className="credit-card" style={{ backgroundColor: props.bgColor, color: props.color }}>
            <img className="type" alt="Card Logo" src={type(props.type)} width="45px"></img>
            <p className="ccNumber">{hideNumbers(props.number)}</p>
            <div className="bank">
                <p>Expires {('0' + props.expirationMonth).slice(-2)}/{expYear(props.expirationYear)}</p>
                <p>{props.bank}</p>
            </div>         
            <p className="name">{props.owner}</p>
        </div>
    )
}

export default CreditCard
