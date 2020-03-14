import React, { Component } from "react";
import "./Dice.css";

class Dice extends Component {
  state = {
    images: [
      "/img/dice1.png",
      "/img/dice2.png",
      "/img/dice3.png",
      "/img/dice4.png",
      "/img/dice5.png",
      "/img/dice6.png"
    ],
    randomDice: "/img/dice1.png"
  };

  clickDice = () => {
    this.setState({
      randomDice:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Dice-0.svg"
    });
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * this.state.images.length);
      let random = this.state.images[randomNum];
      this.setState({
        randomDice: random
      });
    }, 1000);
  };

  render() {
    return (
      <img
        className="dice"
        src={this.state.randomDice}
        alt="random dice"
        onClick={this.clickDice}
      />
    );
  }
}

export default Dice;
