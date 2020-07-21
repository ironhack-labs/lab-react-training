import React, { Component } from 'react';
import './../App.css';

const pictures = [
  './img/dice-empty.png',
  './img/dice1.png',
  './img/dice2.png',
  './img/dice3.png',
  './img/dice4.png',
  './img/dice5.png',
  './img/dice6.png',
];

export class Dice extends Component {
  state = {
    img: 0,
  };

  randomPic = () => {
    this.setState({
      img: Math.floor(Math.random() * (pictures.length - 1) + 1),
    });
  };

  changePic = () => {
    this.setState({img: 0 });
    setTimeout(this.randomPic, 1000);
  };

  render() {
    return (
      <img
        className="dice-img"
        src={pictures[this.state.img]}
        alt="dice faces"
        onClick={this.changePic}
      />
    );
  }
}

export default Dice;
