import React, { Component } from 'react';

class Dice extends Component {
  state = {
    eyes: 3
  }

  calcDiceImg = () => { 
    if (this.state.eyes > 0) {
      return `img/dice${this.state.eyes}.png`
    } else {
      return 'img/dice-empty.png'
    }
  }

  rollDice = () => {
    this.setState({ eyes: 0 })
    setTimeout(() => {
      this.setRandomDice();
    }, 1000)
  }

  setRandomDice = () => {
    this.setState({
      eyes: Math.floor(Math.random() * 6 + 1)
    })
  }

  render() {
    return (
      <img src={this.calcDiceImg()} alt="random dice" width="120px" onClick={() => this.rollDice()} />
    );
  }
}

export default Dice; 