import React, { Component } from "react";
import "./index.css";

export class CreditCard extends Component {
  render() {
    const type = this.props.type;
    const number = this.props.number;
    const expirationMonth = this.props.expirationMonth;
    const expirationYear = this.props.expirationYear;
    const bank = this.props.bank;
    const owner = this.props.owner;
    const bgColor = this.props.bgColor;
    const color = this.props.color;

    return (
      <div class="credit-card" style={{ backgroundColor: bgColor, color: color }}>
        <div>{type}</div>
        <div>{number}</div>
        <div>
          Expires{expirationMonth}/{expirationYear} {bank}
        </div>
        <div>{owner}</div>
      </div>
    );
  }
}

export default CreditCard;
