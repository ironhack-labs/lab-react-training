import React, { Component } from 'react';
import style from './Dice.module.css';

const pictures = [
  '/img/dice1.png',
  '/img/dice2.png',
  '/img/dice3.png',
  '/img/dice4.png',
  '/img/dice5.png',
  '/img/dice6.png'
];

export default class Dice extends Component {
  state = {
    pictures,
    displayedPicture: pictures[Math.floor(Math.random() * 6)]
  }

  displayRandomPicture = () => {
    const displayedPicture = this.state.pictures[Math.floor(Math.random() * 6)];

    this.setState({
      displayedPicture: displayedPicture
    });
  }

  onClickHandler = () => {
    this.setState({
      displayedPicture: '/img/dice-empty.png'
    })

    setTimeout(() => {this.displayRandomPicture()}, 1000)
  }

  render() {
    return (
      <>
        <img className={style.dice} onClick={this.onClickHandler} src={this.state.displayedPicture} alt="dice" />
      </>
    )
  }
}
