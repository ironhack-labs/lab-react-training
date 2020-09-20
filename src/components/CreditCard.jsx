import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
    const secretNumber = '**** **** **** ' + props.number.slice(12)
    const formattedMonth = (props.expirationMonth < 10) ? '0' + props.expirationMonth : props.expirationMonth;
    const formattedYear = props.expirationYear.toString().slice(2);
    const logo = (props.type === 'Visa') ? '/img/visa.png' : '/img/master-card.svg';
    return (<article className="creditCard" style={{backgroundColor: props.bgColor, color: props.color}}>
        <div className="logo">
            <img src={logo}></img>
        </div>
        <p className="number">{secretNumber}</p>
        <p className="small-text"><span>Expires: {formattedMonth}/{formattedYear}</span> <span>{props.bank}</span></p>
        <p className="small-text">{props.owner}</p>
    </article>)
}

export default CreditCard