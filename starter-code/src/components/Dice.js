import React, { Component } from "react";
import Dice0 from "./images/dice-0.png";
import Dice1 from "./images/dice-1.png";
import Dice2 from "./images/dice-2.png";
import Dice3 from "./images/dice-3.png";
import Dice4 from "./images/dice-4.png";
import Dice5 from "./images/dice-5.png";
import Dice6 from "./images/dice-6.png";

export default class Dice extends Component {
  state = {
    currentDice: Dice6,
    dice: {
      0: Dice0,
      1: Dice1,
      2: Dice2,
      3: Dice3,
      4: Dice4,
      5: Dice5,
      6: Dice6
    }
  };

  randomDice = () => {
    let randomNumber = Math.floor(Math.random() * 7);

    this.setState({ currentDice: this.state.dice[0] });
    let newDice = this.state.dice[randomNumber];
    setTimeout(() => {
        this.setState({
        currentDice: newDice
    });
    }, 1000);
  };

  render() {
    return (
      <div>
        <img
          src={this.state.currentDice}
          alt={this.state.currentDice}
          onClick={this.randomDice}
        />
      </div>
    );
  }
}
