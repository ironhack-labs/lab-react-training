import React, { Component } from 'react';

class Dice extends Component {
  state = {
    value: 0,
  }

  rollDice = () => {
    let result = 0
    setTimeout(() => {
      result = Math.floor(Math.random() * (6 - 0)) + 0;
    }, 1000);
  }

  changeDice = (result) => {
    switch (result) {
      case 1:
        return '/img/dice1.png';
      case 2:
        return '/img/dice2.png';
      case 3:
        return '/img/dice3.png';
      case 4:
        return '/img/dice4.png';
      case 5:
        return '/img/dice5.png';
      case 6:
        return '/img/dice6png';
      default:
        return '/img/dice-empty.png';
    }
  }

  render(){
    return (
      <div><img onClick={this.rollDice} src={this.changeDice} alt="dice" /></div>
    )
  }
}

export default Dice;