import React, { Component } from 'react';
import './Dice.css';

class Dice extends Component {
  state = {
    displayingSrc: '/img/dice1.png',
    dices: {
      0: '/img/dice1.png',
      1: '/img/dice2.png',
      2: '/img/dice3.png',
      3: '/img/dice4.png',
      4: '/img/dice5.png',
      5: '/img/dice6.png',
    }
  }

  diceOnClick = () => {
    this.setState({
      displayingSrc: '/img/dice-empty.png',
    })
    setTimeout(() => {
      this.setState({
        displayingSrc: this.state.dices[Math.floor(Math.random() * 6)]
      })
    }, 1000)
  }

  render () {
    return (
      <img
        onClick={this.diceOnClick}
        className='dice'
        src={this.state.displayingSrc}
        alt='dice'
      />
    );
  }
};

export default Dice;
