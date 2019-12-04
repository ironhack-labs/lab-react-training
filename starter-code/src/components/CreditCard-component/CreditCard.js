import React, { Component } from "react";

export default class CreditCard extends Component {
  creditCard = {
    "Master Card": "../img/master-card.svg",
    Visa: "../img/visa.png"
  };

  divStyle = {
    border: "solid 1px black",
    width: "300px",
    borderRadius: "5px",
    padding: "10px"
  };

  imgStyle = {
    width: "50px"
  };

  render() {
    return (
      <div>
        <div style={this.divStyle}>
          <img
            src={this.creditCard[this.props.type]}
            alt="credit card"
            style={this.imgStyle}
          />
          <p>•••• •••• •••• {this.props.number.substr(12, 4)}</p>
          <div>
            <p>
              Expired {this.props.expirationMonth}/{this.props.expirationYear}
            </p>
            <p> {this.props.bank}</p>
            <br /> {this.props.owner}
          </div>
        </div>
      </div>
    );
  }
}
