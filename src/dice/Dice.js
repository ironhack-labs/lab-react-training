import React from 'react';
import './Dice.css';

const firstDice = '../img/dice-empty.png';

class Dice extends React.Component {
  state = {
    dice: firstDice,
  };

  handleDices = () => {
    const dicesArray = [
      '../img/dice1.png',
      '../img/dice2.png',
      '../img/dice3.png',
      '../img/dice4.png',
      '../img/dice5.png',
      '../img/dice6.png',
    ];

    setTimeout(() => {
      this.setState({
        dice: dicesArray[Math.floor(Math.random() * dicesArray.length)],
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <a onClick={this.handleDices}>
          <img className="dice" src={this.state.dice} />
        </a>
      </div>
    );
  }
}

export default Dice;
