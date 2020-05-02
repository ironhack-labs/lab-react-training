import React, { Component } from "react";

export default class Dice extends Component {
  state = {
    buttonState: 3,
  };

  showEmptyDice = () => {
    this.setState({ buttonState: "-empty" });
  };

  showRandomDice = () => {
    this.setState({ buttonState: Math.floor(Math.random() * 6 + 1) });
  };

  rollDice = () => {
    setTimeout(
      () => {
        setTimeout(() => {
          this.showRandomDice();
        }, 1000);
      },
      this.showEmptyDice(),
      100
    );
  };

  render() {
    return (
      <div>
        <img
          className="dice"
          src={`/img/dice${this.state.buttonState}.png`}
          alt="dice"
          onClick={this.rollDice}
        />
      </div>
    );
  }
}
