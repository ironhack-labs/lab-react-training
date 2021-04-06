import React, { Component } from 'react';

export class CreditCard extends Component {
  render() {
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
    const divStyle = {
      backgroundColor: bgColor,
      color: color,
    };
    const hideCardNumber = (number) => '**** **** **** ' + number.substr(-4, 4);
    const twoNumbers = (number) => `0${number}`.substr(-2);
    return (
      <div className="card" style={divStyle}>
        <img
          src={
            type === 'Visa'
              ? './../../img/visa.png'
              : './../../img/master-card.svg'
          }
          alt="card logo"
        />
        <div className="number">{hideCardNumber(number)}</div>
        <div id="firstLine">
          <p>
            Expires {twoNumbers(expirationMonth)}/{twoNumbers(expirationYear)}
          </p>
          <p>{bank}</p>
        </div>
        <div id="secondLine">
          <p>{owner}</p>
        </div>
      </div>
    );
  }
}

export default CreditCard;
