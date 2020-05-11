//Iteration 5 | Component: CreditCard

import React, { Component } from "react";

class CreditCard extends Component {
  render() {
      const divStyle = {
          backgroundColor: this.props.bgColor,
          color: this.props.color
      }
    return (
      <div style={divStyle}>
        <p>{this.props.type}</p>
        <p>{this.props.number}</p>
        <p>
          Expires {this.props.expirationMonth}/{this.props.expirationYear}{" "}
          {this.props.bank}
        </p>
        <p>{this.props.owner}</p>
      </div>
    );
  }
}

export default CreditCard;
