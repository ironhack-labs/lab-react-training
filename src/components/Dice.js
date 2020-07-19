import React, { Component } from 'react';

class Dice extends Component {
  constructor(props) {
    super(props);
    this.allDices = [
      '/img/dice1.png',
      '/img/dice2.png',
      '/img/dice3.png',
      '/img/dice4.png',
      '/img/dice5.png',
      '/img/dice6.png',
    ];
    this.state = {
      dice: this.allDices[Math.floor(Math.random() * this.allDices.length)],
    };
  }

  clickImage = () => {
    this.setState({ dice: '/img/dice-empty.png' });
    setTimeout(() => {
      this.setState({
        dice: this.allDices[Math.floor(Math.random() * this.allDices.length)],
      });
    }, 1000);
  };

  render() {
    return (
      <div onClick={this.clickImage}>
        <img src={this.state.dice} alt="avatar" className="dices" />
      </div>
    );
  }
}

export default Dice;
