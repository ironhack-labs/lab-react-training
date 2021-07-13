import React, { Component } from 'react';

const randomDice1 = Math.floor(Math.random() * 5) + 1;
const randomDice2 = Math.floor(Math.random() * 5) + 1;

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceValue: `/img/dice${[randomDice1]}.png`,
    };
  }
  handleDiceClick = () => {
    this.setState({
      diceValue: '/img/dice-empty.png',
    });

    setTimeout(() => {
      return this.setState({
        diceValue: `/img/dice${[randomDice2]}.png`,
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <img
          className="h-28"
          src={this.state.diceValue}
          alt="img"
          onClick={this.handleDiceClick}
        />
      </div>
    );
  }
}

export default Dice;
