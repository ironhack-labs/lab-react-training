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
            <div className="containImg"><img className="ccImg" src={img} alt="credit card"></img></div>
            <p className="bigNumbers">•••• •••• •••• {props.number.substr(-4)}</p>
            <p>{props.expirationMonth} / {props.expirationYear} <span className="paddingLeft">{props.bank}</span></p>
            <p>{props.owner} </p>
        </div> 
    );
};

export default CreditCard;