import React, { Component } from 'react';
import './style.scss';

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
    const style = { backgroundColor: bgColor, color };

    function ccc(number) {
      let ccNumber = [];
      for (let i = 0; i < number.length; i++) {
        if (i >= number.length - 4) {
          ccNumber.push(number[i]);
        } else {
          ccNumber.push('*');
        }
      }
      return ccNumber;
    }
    return (
      <div className="card" style={style}>
        <p>{type}</p>
        <p>{ccc(number)}</p>
        <p>
          Expires {expirationMonth}/{expirationYear}
          <span>{bank}</span>
        </p>
        <p>{owner}</p>
      </div>
    );
  }
}

export default CreditCard;
