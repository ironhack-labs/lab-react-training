import React, { Component } from "react";

const diceImg = "./img/dice-empty.png";

class Dice extends Component {
  state = {
    dice: diceImg
  };
  handleClick = () => {
    this.setState({
      dice: diceImg,
      randomNumber: Math.ceil(Math.random() * 6)
    });
    setTimeout(() => {
      this.setState({
        dice: `./img/dice${this.state.randomNumber}.png`
      });
    }, 1000);
  };
  render() {
    return (
      <div className="dice">
        <img onClick={this.handleClick} src={this.state.dice} alt="dice" />
      </div>
    );
  }
}

export default Dice;
