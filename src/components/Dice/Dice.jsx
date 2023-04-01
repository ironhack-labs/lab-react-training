/*JSX DE LA INTERACCIÓN 10*/

import './Dice.css';
import React from 'react';

import diceEmpty from '../../assets/images/dice-empty.png';
import dice1 from '../../assets/images/dice1.png';
import dice2 from '../../assets/images/dice2.png';
import dice3 from '../../assets/images/dice3.png';
import dice4 from '../../assets/images/dice4.png';
import dice5 from '../../assets/images/dice5.png';
import dice6 from '../../assets/images/dice6.png';

class Dice extends React.Component {
  state = {
    image: dice3,
  };

  getRandomDice = () => {
    const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];
    const randomdice = diceArr[Math.floor(Math.random() * diceArr.length)];

    return randomdice;
  };

  changeDice = () => {
    this.setState({
      image: diceEmpty,
    });

    setTimeout(() => {
      this.setState({
        image: this.getRandomDice(),
      });
    }, 1000);
  };

  render() {
    return (
      <div className="Dice">
        <img onClick={this.changeDice} src={this.state.image} alt="..." />
      </div>
    );
  }
}

export default Dice;
