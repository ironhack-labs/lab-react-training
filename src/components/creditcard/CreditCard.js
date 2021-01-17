import React from 'react';
import style from './CreditCard.module.css';
import visa from './visa.png';
import master from './master.png';

function getCardLogo(type) {
    if (type === "Visa") {
        return visa;
    } else if (type === "Master Card") {
        return master;
    }
}

function showCardLastDigits(n) {
    return n.slice(-4);
}

function CreditCard(props) {
    const creditCardStyle = {
        backgroundColor: props.card.bgColor,
        color: props.card.color,
    };

    return (
        <div className={style.card} style={creditCardStyle}>
            <img className={style.logo} src={getCardLogo(props.card.type)} alt={props.card.type} />
            <span className={style.number}>•••• •••• •••• {showCardLastDigits(props.card.number)}</span>
            <div className={style.textinfo}>
                <div>
                    <span>Expires {props.card.expirationMonth}/{props.card.expirationYear}</span>
                    <span className={style.bank}>{props.card.bank}</span>
                </div>
                <span>{props.card.owner}</span>
            </div>
        </div>
    )
}

function WrapContainer(props) {
    return (
        <div className={style.wrap}>
            {props.children}
        </div>
    )
}

export {CreditCard, WrapContainer};