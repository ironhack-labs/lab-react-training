import React, { Component } from 'react';
import './dice.css';

export default class Dice extends Component {
  state = {
    dice: this.props.diceEmpty,
  };

  delayState = () => {
    setTimeout(() => {
      const diceArr = [
        this.props.dice1,
        this.props.dice2,
        this.props.dice3,
        this.props.dice4,
        this.props.dice5,
        this.props.dice6,
      ];

      let random = diceArr[Math.floor(Math.random() * diceArr.length)];
      this.setState({
        dice: random,
      });
    }, 1000);
  };

  handleOnClick = () => {
    this.delayState();

    this.setState(
      {
        dice: this.props.diceEmpty,
      },
      //this lets us know immediately what the state is
      () => console.log(this.state.dice, this.state.clicked)
    );
  };

  render() {
    return (
      <div id="dice-container">
        <h1>Dice</h1>
        <h3>Click the Die</h3>
        <img onClick={this.handleOnClick} src={this.state.dice} alt="Dice" />
      </div>
    );
  }
}
