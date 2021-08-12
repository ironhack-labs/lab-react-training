import React, { Component } from 'react';

const images = [
  '/img/dice1.png',
  '/img/dice2.png',
  '/img/dice3.png',
  '/img/dice4.png',
  '/img/dice5.png',
  '/img/dice6.png',
];

class Dice extends Component {
  state = {
    isClicked: false,
  };

  handleClick = () => {
    if (this.state.isClicked) return;
    this.setState({ isClicked: true });
    setTimeout(() => {
      this.setState({ isClicked: false });
    }, 1000);
  };

  render() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomDiceImage = images[randomIndex];
    const defaultDiceImage = '/img/dice-empty.png';

    return (
      <img
        style={{ width: '150px' }}
        onClick={this.handleClick}
        src={this.state.isClicked ? defaultDiceImage : randomDiceImage}
        alt="dice"
      />
    );
  }
}

export default Dice;
