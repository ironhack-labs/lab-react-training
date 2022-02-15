import React from 'react';

function CreditCard(props) {
    const expirationMonth = props.expirationMonth < 10 ? '0' + props.expirationMonth : props.expirationMonth;
    const expirationYear = props.expirationYear.toString().slice(2,4)
    const dots = ("·".repeat(4)+ ' ').repeat(3);
    const number = props.number.slice(12,16);

    const styleCard = {
        backgroundColor: props.bgColor,
        color: props.color,
        borderRadius: '7px',
        width: '340px',
        height: '180px',
        padding: '12px'
    }

    const styleType = {
        textAlign: 'right',
        color: 'navy'
    }
    const styleCardNumber = {
        fontSize: '54px',
        position: 'relative'
    }

    return (
        <div style={styleCard}>
        <h1 style={styleType}>{props.type}</h1>
        <p style={styleCardNumber}>{dots}<span className="number-end">{number}</span></p>
        <p>Expires {expirationMonth}/{expirationYear}<span>{props.bank}</span></p>
        <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard;