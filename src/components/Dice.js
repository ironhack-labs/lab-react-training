// components/Dice.js

import React, { Component } from 'react';

class Dice extends Component {
  state = { number: 0 };
  
  changeDice = () => {
    this.setState({
      number: this.random(),
    });
  }

  random = () => {
    return Math.ceil(Math.random() * 6);
  }

  componentDidMount = () => {
    this.changeDice();
  }

  handleClick = () => {
    this.setState({ number: 0 },
      () => setTimeout(
      () => { this.changeDice() }, 1000)
    );
  }

  render() {
    const { number } = this.state;
    const src = `/img/dice${number}.png`;
    const alt = src;
    return (
      <img
        src={src}
        alt={alt}
        onClick={this.handleClick}
        className='dice'
      />
    );
  }
}

export default Dice;
