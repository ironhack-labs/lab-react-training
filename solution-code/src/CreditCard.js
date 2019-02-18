import React, { Component } from 'react';

// Definition of the component CreditCard
class CreditCard extends Component {
  render() {
    return (
      <div className="CreditCard" style={{
        backgroundColor: this.props.bgColor,
        color: this.props.color,
      }}>
        <div className="type">
          {this.props.type === "Visa" && <img src="https://resources.mynewsdesk.com/image/upload/ojf8ed4taaxccncp6pcp.png" />}
          {this.props.type === "Master Card" && <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/MasterCard_early_1990s_logo.svg" />}
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
