import React, { Component } from 'react';
import './CreditCard.css';

class CreditCard extends Component {
    render() {
        const { bgColor, type, number, expirationMonth, expirationYear, bank, owner, color } = this.props;
        const divStyle = {
            backgroundColor: bgColor,
            color: color
        };
        let imgSrc = undefined;

        if (type === 'Visa') {
            imgSrc = 'img/visa.png';
        } else {
            imgSrc = 'img/master-card.svg';
        }

        const lastNumbers = number.substring(12, 16);
        const numberMasked = `•••• •••• •••• ${lastNumbers}`;
        const expMonthString = (`0${expirationMonth}`).slice(-2);
        const expYearString = expirationYear.toString().slice(-2);

        return (
            <div style={divStyle} className='CreditCard'>
                <div className='CreditCard-logo-container'>
                    <img src={imgSrc} alt=''/>
                </div>
                <div className='CreditCard-number'>{numberMasked}</div>
                <div><span>Expires {expMonthString}/{expYearString}</span><span className='CreditCard-bank'>{bank}</span></div>
                <div>{owner}</div>
            </div>
        );
    }
}

export default CreditCard;