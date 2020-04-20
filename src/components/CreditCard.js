import React, { Component } from 'react';


class CreditCard extends Component {

  selectType = (type) => {
    if (type === "Visa") {
      return '/img/visa.png';
    }
    else {
      return '/img//master-card.svg';
    }
  }

  getMonth = (expirationMonth) => {
    return ('0' + expirationMonth).slice(-2)
  }

  render() {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = this.props;

    const creditCardStyle = {
      backgroundColor: `${bgColor}`,
      color: `${color}`,
    }
    return(
      <div style={ creditCardStyle } className="credit-card-container">
        <img className="type-of-card" src={ this.selectType(type) } alt="Type"/>
        <p className="expiration-date">**** **** **** {number.substring(12)}</p>
        <div className="information-container">
          <div className="information-box">
            <p>{this.getMonth(expirationMonth)}/{expirationYear}</p>
            <p className="bank">{bank}</p>
          </div>
          <p className="owner">{owner}</p>
        </div>
        
      </div>
    )
  }
}

export default CreditCard;