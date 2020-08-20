import React from 'react'

function CreditCard(props) {
    let styles = {
        backgroundColor: props.bgColor,
        color: props.color
    }

    let img;
    props.type === 'Visa' ? img =  './img/visa.png' : img  = './img/master-card.svg';

    let month = '';
    if (props.expirationMonth.toString().length === 1) {
        month += '0' + props.expirationMonth.toString()
    } else {
        month += props.expirationMonth.toString()
    }

    return (
        <div style={styles} className="creditcard">
            <img src={img} alt="type"></img>
            <div className="cc-nr">
                <p className="nr">.... .... .... {props.number.slice(-4)}</p>
            </div>
            <div className="cc-text">
                <p>Expires {month}/{props.expirationYear.toString().slice(-2)}   {props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;