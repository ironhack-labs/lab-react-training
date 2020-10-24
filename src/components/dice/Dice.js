import React, { Component } from 'react';

export default class Dice extends Component {
  state = {
    img: `/img/dice${Math.floor(Math.random() *6 + 1)}.png`,
  };

  clickDice(showRandomDice) {
    this.setState({
      img: '/img/dice-empty.png',
    });
    const randomAgain = setTimeout(() => {
        this.setState({
            img: `/img/dice${Math.floor(Math.random() *6 + 1)}.png`
          });
    }, 1000) 
  }

  render() {
    return (
      <div onClick={(e) => this.clickDice(e)}>
        <img src={this.state.img} alt="" />
      </div>
    );
  }
}
