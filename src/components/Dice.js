import React from 'react';

// DICE IMAGES
import emptyDice from './img/dice-empty.png';
import Dice1 from './img/dice1.png';
import Dice2 from './img/dice2.png';
import Dice3 from './img/dice3.png';
import Dice4 from './img/dice4.png';
import Dice5 from './img/dice5.png';
import Dice6 from './img/dice6.png';

class Dice extends React.Component {
  state = {
    randomNumber: 0,
    img: Dice1,
  };

  random = () => {
    return Math.ceil(Math.random() * 6);
  };

  randomNumber = () => {
    setTimeout(() => {
      const newNumber = this.random();
      switch (newNumber) {
        case 1:
          return this.setState({ img: Dice1 });
        case 2:
          return this.setState({ img: Dice2 });
        case 3:
          return this.setState({ img: Dice3 });
        case 4:
          return this.setState({ img: Dice4 });
        case 5:
          return this.setState({ img: Dice5 });
        case 6:
          return this.setState({ img: Dice6 });
      }
    }, 1000);
    this.setState({ img: emptyDice });
  };

  render() {
    return (
      <img src={this.state.img} className="dice" onClick={this.randomNumber} />
    );
  }
}

export default Dice;
