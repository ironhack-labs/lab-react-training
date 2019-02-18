import React, { Component } from 'react';

class Dice extends Component {
  render() {
    let randomNumber = 1 + Math.floor(6*Math.random())
    return (
      <img className="Dice" src={`/img/dice${randomNumber}.png`} alt="Dice"/>
    );
  }
}

export default Dice;
