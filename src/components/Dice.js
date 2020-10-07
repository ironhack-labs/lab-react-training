import React, { Component } from 'react';

class Dice extends Component {
  state = {
    diceValue: 1,
    emptyDice: '/img/dice-empty.png',
    dice: `/img/dice`,
  };

  // const DicesNumber = ["/img/dice1.png"];

  randomDice = () => {
    console.log('clicked');
    this.setState({
      dice: this.state.dice,
    });
    console.log(this.state.dice);
  };

  render() {
    return (
      <div>
        <img
          className="Dice"
          onClick={this.randomDice}
          src={this.state.emptyDice}
          alt="Empty-Dice"
        />
      </div>
    );
  }
}

export default Dice;
