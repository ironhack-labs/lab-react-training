import React, { Component } from 'react';

class CreditCard extends Component {
    render({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}=this.props) {
        return (
            <div className="credit-card" style={{backgroundColor: bgColor, color: color}}>
                <p>{type}</p>
                <p>**** **** **** **** {number.slice(number.length-4, number.length)}</p>
                <p>Expires {expirationMonth}/{expirationYear}  {bank}</p>
                <p>{owner}</p>
            </div>
        );
    }
}

export default CreditCard;