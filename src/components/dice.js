import React, { Component } from "react";

const a = '/img/dice1.png';
const b = '/img/dice2.png';
const c = '/img/dice3.png';
const d = '/img/dice4.png';
const e = '/img/dice5.png';
const f = '/img/dice6.png';

class Dice extends Component {

  state = {
    items: [a, b, c, d, e, f],
    active: true,
  }

  changeDice = () => {
    if (this.state.active === true) {
      return this.state.items[Math.floor(Math.random() * this.state.items.length)];
    } else {
      setTimeout(() => { this.toggleClass() }, 1000);
      return '/img/dice-empty.png';
    }
  }

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ 
      active: !currentState, 
    });
  };

  render () {
    return (
      <div className="picture-box">
        <img className="dice-img" onClick={this.toggleClass} src={this.changeDice()} alt=""/>
      </div>
    )
  }
}

export default Dice;

