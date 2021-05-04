import React, { Component } from 'react';
import './Dice.css';

export default class Dice extends Component {
  state = {
    dice: 0,
  };

  clickHandler = () => {
    setTimeout(() => {
      const rnd = Math.round(1 + Math.random() * (6 - 1));
      this.setState(() => {
        return { dice: rnd };
      });
    }, 1000);
    this.setState(() => {
      return { dice: 0 };
    });
  };

  render() {
    return (
      <div className="dice" onClick={this.clickHandler}>
        <img
          src={
            this.state.dice === 0
              ? process.env.PUBLIC_URL + 'img/dice-empty.png'
              : process.env.PUBLIC_URL + 'img/dice' + this.state.dice + '.png'
          }
          alt={this.state.dice}
        />
        {this.state.dice}
      </div>
    );
  }
}
