import React, { Component } from "react";
import "./CreditCard.css";

export default class CreditCard extends Component {
  render() {
    const {
      backgroundColor,
      colorVal,
      image,
      number,
      expireNum,
      back,
      owner,
    } = this.props;
    return (
      <div>
        <div
          class="creditCard-container"
          style={{
            backgroundColor: `${backgroundColor}`,
            color: `${colorVal}`,
          }}
        >
          <div class="type">
            <img src={image}></img>
          </div>
          <div class="number">{number}</div>
          <div class="expires-bank">
            <span>{expireNum}</span>
            <span class="bank">{back}</span>
          </div>
          <div class="owner">{owner}</div>
        </div>
      </div>
    );
  }
}
