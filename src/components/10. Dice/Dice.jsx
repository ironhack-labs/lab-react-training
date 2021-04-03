import { Component } from 'react';
import './Dice.css';

export default class Dice extends Component {
  state = {
    value: this.randomValue(),
  };

  randomValue() {
    return 1 + Math.floor(6 * Math.random());
  }

  clickDice = () => {
    if (this.state.value) {
      this.setState((previous) => ({
        value: null,
      }));
      setTimeout(() => {
        this.setState((previous) => ({
          value: this.randomValue(),
        }));
      }, 1000);
    }
  };
  render() {
    let src;
    if (this.state.value) {
      src = `/img/dice${this.state.value}.png`;
    } else src = `/img/dice-empty.png`;

    return (
      <img className="diceImg" src={src} onClick={this.clickDice} alt="dice" />
    );
  }
}
