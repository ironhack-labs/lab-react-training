import React from 'react';

const CreditCard = (props) => {
    const imgSource = {
        Visa: './img/visa.png',
        'Master Card' : './img/master-card.svg',
    };

    return (
    <div style ={{backgroundColor: props.bgColor, color: props.color }} >
        <img src={imgSource[props.type]} alt=""/>
        <p>**** **** **** {props.number.slice(-4)}</p>
        <p>
            Expires {props.expirationMonth} / {props.expirationYear} {props.bank}
        </p>

    </div>
    )
}

export default CreditCard;