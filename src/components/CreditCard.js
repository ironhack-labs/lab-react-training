import React from 'react';
import './CreditCard.css';


function CreditCard(props) {
    let img
    if (props.type === 'Visa') {
        img = 'img/visa.png';
    } else {
        img = 'img/master-card.svg';
    }

    return (
        <div className="CreditCard" style={{color: `${props.color}`,  backgroundColor: `${props.bgColor}` }}>
        <img className="ccImg" src={img} alt="credit card"></img>
        <p>{props.number}</p>
        <p>{props.expirationMonth} / {props.expirationYear} </p>
        <p>{props.bank} </p>
        <p>{props.owner} </p>
        
        </div>
        

    );
};

export default CreditCard;
