import React, { Component } from 'react';
import './boxcolor.css';

class Dice extends Component {
  constructor() {
    super();
    this.state = {
      img: `/img/dice${Math.floor(Math.random() * 6 + 1)}.png`,
    };
  }

  changeDice = () => {
    this.setState({
      img: `/img/dice-empty.png`,
    });
    setTimeout(() => {
      this.setState({
        img: `/img/dice${Math.floor(Math.random() * 6 + 1)}.png`,
      });
    }, 1000);
  };

  render() {
    return (
      <img
        src={this.state.img}
        onClick={this.changeDice}
        className="imgsize"
        alt="Dice Playing"
      />
    );
  }
}

export default Dice;
