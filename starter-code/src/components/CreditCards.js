import React, { Component } from "react";
import { CreditC } from "../styles/components";
export default class CreditCard extends Component {
  state = {
    logo: "/img/visa.png"
  };
  render() {
    if (this.props.type === "Master Card") {
      this.setState({ logo: "/img/master-card.svg" });
    }
    return (
      <CreditC
        style={
          ({ color: this.props.color },
          { "background-color": this.props.bgColor })
        }
      >
        <img src={this.state.logo} alt="CClogo" />
        <div class="cc-number">
          <p>**** **** **** {this.props.number.slice(12, 16)}</p>
        </div>
        <div class="bank">
          <p>
            Expires: {this.props.expirationMonth}/{this.props.expirationYear}{" "}
            {this.props.bank}
          </p>
        </div>
        <p>{this.props.owner}</p>
      </CreditC>
    );
  }
}
