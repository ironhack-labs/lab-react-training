import React, {Component} from 'react';
import './CreditCard.css';

class CreditCard extends Component {
    render () {

        const {
            type,
            number,
            expirationMonth,
            expirationYear,
            bank,
            owner,
            bgColor,
            color,
        } = this.props;

        let company = type === 'Visa' ? './img/visa.png' : './img/master-card.svg';

        let lastDigits = number.substring(number.length - 4);

        let exMonth = expirationMonth.toString().length === 1 ? '0' + expirationMonth : expirationMonth;
        let exYear = expirationYear.toString().slice(2)

        const cardStyle = {backgroundColor: `${bgColor}`, color: `${color}`}
        

        return (
            <div className="credit-card" style={cardStyle}>
                <img src={company} alt="card type" />
                <h3>**** **** **** {lastDigits}</h3>
                <div className="exdate-bank">
                    <p>Expires {exMonth}/{exYear}</p>
                    <p className="bank">{bank}</p>
                </div>
                <p>{owner}</p>
            </div>
        )
    }
}

export default CreditCard;