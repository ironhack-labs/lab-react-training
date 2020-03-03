import React, { Component } from 'react';
import './CreditCard.css';

class CreditCard extends Component {
  render() {
    const {
      type,
      number,
      expirationMonth,
      expirationYear,
      bank,
      owner,
      bgColor,
      color
    } = this.props;

    const style = {
      color: `${color}`,
      backgroundColor: `${bgColor}`
    };

    let hiddenNumber = [];

    for (let i = 0; i < number.length; i++) {
      if (i < number.length - 4) {
        hiddenNumber.push('•');
      } else {
        hiddenNumber.push(number[i]);
      }
    }

    return (
      <div className="credit-card" style={style}>
        <img
          src={
            type === 'Visa'
              ? process.env.PUBLIC_URL + '/img/visa.png'
              : process.env.PUBLIC_URL + '/img/master-card.svg'
          }
          alt="credit card"
          className="credit-card-type"
        />
        <br />
        <span className="credit-card-number">{hiddenNumber}</span>
        <br />
        <span>
          Expires {expirationMonth}/{expirationYear} {bank}
        </span>
        <span>{owner}</span>
      </div>
    );
  }
}

export default CreditCard;
