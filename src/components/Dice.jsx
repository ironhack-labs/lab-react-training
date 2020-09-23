import React, { Component } from 'react';

class Dice extends Component {
  shuffleDice = (e) => {
    e.preventDefault();
    this.setState({ dice: this.getRandomDice('-empty') });
    setTimeout(() => {
      this.setState({ dice: this.getRandomDice() });
    }, 1000);
  };

  getRandomDice = (randNumber = -1) => {
    if (randNumber < 0) randNumber = Math.floor(Math.random() * 5 + 1);
    return (
      <img
        src={`../img/dice${randNumber}.png`}
        style={{ height: '200px' }}
        alt={`Dice${randNumber}`}
        onClick={this.shuffleDice}
      />
    );
  };

  state = {
    dice: this.getRandomDice(),
  };

  render() {
    return <div>{this.state.dice}</div>;
  }
}

export default Dice;
