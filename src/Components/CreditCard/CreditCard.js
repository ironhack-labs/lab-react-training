import React, { Component } from 'react';
import './CreditCard.css'

class CreditCard extends Component {
    render(){
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

        const card = type === 'Visa' ? './img/visa.png' : './img/master-card.svg';

        const expiringM = expirationMonth.toString().length === 1
        ? '0' + expirationMonth : expirationMonth;
        
        const expiringY = expirationYear.toString().slice(2,4)

        const yelp = {
            backgroundColor: bgColor,
            color: color,
        }

        return (
            <div className="creditCard" style={yelp}>
                <div className="bordinha">
                    <img src={card} alt={type}></img>
                    <p className='card-number'>•••• •••• •••• {number.slice(12, 16)}</p>
                    <p className='due'>
                        Expires {expiringM}/{expiringY} &emsp; {bank} {/* &emsp; tab space */}
                    </p>
                    <p className='owner'>{owner}</p>
                </div>
            </div>
        )
    }
}

export default CreditCard;