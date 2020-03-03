import React, { Component } from 'react';
import './Dice.css';

let diceImgs = [
  process.env.PUBLIC_URL + '/img/dice1.png',
  process.env.PUBLIC_URL + '/img/dice2.png',
  process.env.PUBLIC_URL + '/img/dice3.png',
  process.env.PUBLIC_URL + '/img/dice4.png',
  process.env.PUBLIC_URL + '/img/dice5.png',
  process.env.PUBLIC_URL + '/img/dice6.png'
];

class Dice extends Component {
  constructor() {
    super();
    this.state = {
      img: diceImgs[Math.floor(Math.random() * diceImgs.length)]
    };
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage() {
    this.setState(previousState => ({
      img: process.env.PUBLIC_URL + '/img/dice-empty.png'
    }));

    setTimeout(() => {
      this.setState(previousState => ({
        img: diceImgs[Math.floor(Math.random() * diceImgs.length)]
      }));
    }, 1000);
  }

  render() {
    return <img className="Dice" src={this.state.img} alt="dice" onClick={this.changeImage} />;
  }
}

export default Dice;
