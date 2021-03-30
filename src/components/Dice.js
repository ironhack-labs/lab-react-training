import React, { Component } from 'react';
import { getRandomInt } from '../assets/misc/getRandomInt';
import '../assets/css/Dice.css';

class Dice extends Component {
  state = {
    side: 3,
  };

  rollDice = () => {
    setTimeout(() => {
      this.setState({ side: '-empty' });
      setTimeout(() => {
        this.setState({ side: getRandomInt(1, 6) });
      }, 1000);
    }, 1);
  };

  render() {
    const imgPath = this.state.toggle ? this.props.imgClicked : this.props.img;

    return (
      <div className="Dice">
        <img
          style={{ maxWidth: '100px' }}
          src={`/img/dice${this.state.side}.png`}
          onClick={this.rollDice}
        />
      </div>
    );
  }
}

export default Dice;
