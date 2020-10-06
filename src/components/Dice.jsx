import React, { Component } from 'react';

let diceArr = [
  '/img/dice1.png',
  '/img/dice2.png',
  '/img/dice3.png',
  '/img/dice4.png',
  '/img/dice5.png',
  '/img/dice6.png',
];

export class Dice extends Component {
  state = {
    dice: '/img/dice1.png',
  };

  rollDice = () => {
    let randomDice = diceArr[Math.floor(Math.random() * diceArr.length)];
    this.setState({
      dice: '/img/dice-empty.png',
    });
    setTimeout(() => {
      this.setState({ dice: randomDice });
    }, 1000);

  };

  render() {
    return (
      <div className="dice">
        <img src={this.state.dice} onClick={this.rollDice} alt="dice-img" />
      </div>
    );
  }
}

export default Dice;
