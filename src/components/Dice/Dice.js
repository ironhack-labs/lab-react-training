import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
  dicePicArr = [
    '/img/dice-empty.png',
    '/img/dice1.png',
    '/img/dice2.png',
    '/img/dice3.png',
    '/img/dice4.png',
    '/img/dice5.png',
    '/img/dice6.png',
  ];
  randStart = Math.floor(Math.random() * (this.dicePicArr.length - 2)) + 1;

  state = {
    currDice: this.dicePicArr[this.randStart],
  };

  rollDiceAgain = () => {
    this.setState({
      currDice: this.dicePicArr[
        Math.floor(Math.random() * (this.dicePicArr.length - 2)) + 1
      ],
    });
  };

  rollDice = () => {
    this.setState({
      currDice: this.dicePicArr[0],
    });
    setTimeout(this.rollDiceAgain, 1000);
  };

  render() {
    return (
      <div>
        <img
          className="dice"
          src={this.state.currDice}
          onClick={this.rollDice}
        />
      </div>
    );
  }
}

export default Dice;
