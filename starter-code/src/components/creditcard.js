import React, { Component } from 'react';


export class CreditCard extends Component {
  render() {
    let styles = {
      color: this.props.color,
      backgroundColor: this.props.bgColor,
    };
    let bankNumber = this.props.number;
    let newBankNumber = bankNumber.substr(-4);
    let yearNumber = this.props.expirationYear.toString();
    let newYearNumber = yearNumber.substr(-2);
  
    return (
      <div className="CreditCard" style={styles}>
        <div className="type">
          <img src={this.props.cardimage} alt={this.props.type} />
        </div>
        <div className="cardnumberbox">
          <h2>•••• •••• •••• {newBankNumber}</h2>
        </div>
        <div className="contentbox">
          <h3><span>Expires {this.props.expirationMonth}/{newYearNumber}</span><span className="bankalign">{this.props.bank}</span></h3>
          <h3>{this.props.owner}</h3>
        </div>
      </div>
    )
  }
}

export default CreditCard;
