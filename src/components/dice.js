import React, { Component } from "react";

const a = '/img/dice1.png';
const b = '/img/dice2.png';
const c = '/img/dice3.png';
const d = '/img/dice4.png';
const e = '/img/dice5.png';
const f = '/img/dice6.png';
const items = [a, b, c, d, e, f];
let random = Math.floor(Math.random() * items.length);


class Dice extends Component {

  state = {
    active: false,
  }

  getDice = () => {
    setTimeout(() => {
      console.log('Hello, World!');
      return items[random];
    }, 1000);
    console.log('works');
    return '/img/dice-empty.png';
  }

  changeDice = () => {
    if (this.state.active === false) {
      return items[random];
    } else {
      return this.getDice();;
    }
  }

  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
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