import React from 'react';

export default class Dice extends React.Component {
  dice = [
    '/img/dice-empty.png',
    '/img/dice1.png',
    '/img/dice2.png',
    '/img/dice3.png',
    '/img/dice4.png',
    '/img/dice5.png',
    '/img/dice6.png',
  ];
  state = {
    dice: this.dice[1],
  };

  clickDice() {
    const randomNum = Math.floor(Math.random() * 5);
    setTimeout(() => {
      this.setState({
        dice: this.dice[randomNum],
      });
    }, 1000);
    this.setState({
      dice: this.dice[0],
    });
  }

  render() {
    return (
      <button className="buttonDice" onClick={() => this.clickDice()}>
        <img src={this.state.dice}></img>
      </button>
    );
  }
}
