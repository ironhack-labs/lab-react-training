import React, { Component } from 'react';
import './Dice.css';

export default class Dice extends Component {
  state = {
    diceNum: Math.floor(Math.random() * 6) + 1
  }

  throwDice = () => {
    this.setState({ diceNum: '-empty' })

    setTimeout(() => {
      this.setState({ 
        diceNum: Math.floor(Math.random() * 6) + 1 
      })
    }, 1000);
  }

  render() {
    return (
      <div className='dice' onClick={this.throwDice}>
        <img src={`/img/dice${this.state.diceNum}.png`} alt='dice' />
      </div>
    )
  }
}
