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

    return (
      <div className="credit-card" style={style}>
        <span className="credit-card-type">{type}</span>
        <br />
        <span className="credit-card-number">{number}</span>
        <br />
        <span>
          Expires {expirationMonth}/{expirationYear} {bank}
        </span>
        <br />
        <span>{owner}</span>
      </div>
    );
  }
}

export default CreditCard;
