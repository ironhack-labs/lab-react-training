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
    const bulletGroup = `\u2022 \u2022 \u2022 \u2022 \u2007`;
    return `
      ${bulletGroup} ${bulletGroup} ${bulletGroup} ${number.slice(12, 16)}`;
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
        className="CreditCard"
        style={{ backgroundColor: this.props.bgColor, color: this.props.color }}
      >
        <img className="Logo" src={this.getLogoSrc()} />
        <div className="Number">{this.hideNumber()}</div>
        <div className="Row">
          <div className="Expiration">
            <span>
              Expires {this.setMonthNumber()}/{this.props.expirationYear}
            </span>
          </div>
          <span>
            <div className="Bank">{this.props.bank}</div>
          </span>
        </div>
        <div className="Owner Row">{this.props.owner}</div>
      </div>
    );
  }
}
