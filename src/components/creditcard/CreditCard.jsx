import React from 'react';
import './CreditCard.css';
import visaLogo from '../../assets/visa.png';
import masterLogo from '../../assets/master-card.svg';

export default class CreditCard extends React.Component {
  getLogoSrc() {
    if (this.props.type === 'Visa') {
      return visaLogo;
    } else {
      return masterLogo;
    }
  }

  hideNumber() {
    const number = this.props.number;
    return `···· ···· ···· ${number.slice(12, 16)}`;
  }

  setMonthNumber() {
    if (this.props.expirationMonth < 10) {
      return `0${this.props.expirationMonth}`;
    } else {
      return this.props.expirationMonth;
    }
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.props.bgColor, color: this.props.color }}
      >
        <img className="Image" src={this.getLogoSrc()} />
        <div className="Number">{this.hideNumber()}</div>
        <div className="Expiration">
          {this.setMonthNumber()}/{this.props.expirationYear}
        </div>
        <div className="Bank">{this.props.bank}</div>
        <div className="Owner">{this.props.owner}</div>
      </div>
    );
  }
}
