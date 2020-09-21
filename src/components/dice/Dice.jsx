import React from 'react';
import './Dice.css';

export default class Dice extends React.Component {
  getRandomDice() {
    return `/img/dice${Math.floor(Math.random() * 6) + 1}.png`;
  }

  constructor(props) {
    super(props);
    this.state = { img: this.getRandomDice() };
  }

  modifiedDice() {
    this.setState({ img: '/img/dice-empty.png' });
    setTimeout(() => {
      this.setState({ img: this.getRandomDice() });
    }, 1000);
  }

  render() {
    return (
      <img
        className="dice-img"
        src={this.state.img}
        onClick={() => this.modifiedDice()}
      />
    );
  }
}
