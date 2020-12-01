import React, { Component } from 'react';

export default class Dice extends Component {
  state = {
    blank: false,
  };

  randomNumber = () => {
    let number = Math.floor(Math.random() * (6 - 1)) + 1;
    return number;
  };

  clickHandler = () => {
    console.log(this.state.blank);
    this.setState((state) => ({
      blank: true,
    }));
    setTimeout(() =>
      this.setState((state) => ({
        blank: false,
      })),
      1000
    );
  };

  render() {
    return (
      <div>
        {this.state.blank ? <img onClick={this.clickHandler} src={`./img/dice-empty.png`} alt="dice" width="50px"/> : <img onClick={this.clickHandler} src={`./img/dice${this.randomNumber()}.png`} alt="dice" width="50px"/>}
      </div>
    );
  }
}