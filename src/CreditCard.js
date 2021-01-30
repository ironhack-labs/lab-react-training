/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';

class CreditCard extends Component {
  render() {
    return (
      <div className="CreditCard" style={{
        backgroundColor: this.props.bgColor,
        color: this.props.color,
      }}>
        <div className="type">
          // eslint-disable-next-line jsx-a11y/alt-text
          {this.props.type === "Visa" && <img src="/img/visa.png" />}
          {this.props.type === "Master Card" && <img src="/img/master-card.svg" />}
        </div>
        <div className="number">•••• •••• •••• {this.props.number.substr(-4)}</div>
        <div className="expires-bank">
          <span>Expires {('0'+this.props.expirationMonth).substr(-2)}/{this.props.expirationYear.toString().substr(2)} </span>
          <span className="bank">{this.props.bank}</span>
        </div>
        <div className="owner">{this.props.owner}</div>
      </div>
    );
  }
}

export default CreditCard;