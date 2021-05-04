import React from 'react';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const typeImg = type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg';
    const style = {
        backgroundColor: bgColor,
        color: color
    }

    return (
        <div style={style}>
            <img src={typeImg} alt={type} />
            <p>{'**** **** **** ' + number.slice(-4)}</p>
            <p>{'Expires ' + ('0'+expirationMonth.toString()).slice(-2) + '/' + expirationYear.toString().slice(-2) + '    ' + bank}</p>
            <p>{owner}</p>
        </div>
    );
}

export default CreditCard;

