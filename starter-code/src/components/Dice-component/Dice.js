import React, { Component } from "react";

export default class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eye: 3
    };

    this.displayDice = () => {
      if (this.state.eye > 0) {
        return `img/dice${this.state.eye}.png`;
      } else {
        return "img/dice-empty.png";
      }
    };

    this.rollDice = () => {
      console.log("rolling!");
      this.setState({
        eye: 0
      });
      setTimeout(() => {
        this.setRandomDice();
      }, 1000);
    };

    this.setRandomDice = () => {
      this.setState({
        eye: Math.floor(Math.random() * 6 + 1)
      });
    };
  }

  render() {
    return (
      <div>
        <img
          src={this.displayDice()}
          alt="dice"
          width="50px"
          onClick={() => this.rollDice()}
        />
      </div>
    );
  }
}
