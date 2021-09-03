import React from 'react';
import './Dice.css';

class Dice extends React.Component {
  state = {
    diceImg: '/img/dice3.png',
    status: true,
  };

  randomDice = () => {
    this.setState({
      status: !this.state.status,
      diceImg: '/img/dice-empty.png',
    });

    setTimeout(() => {
      this.setState({ status: true });
      let randomNumber = Math.floor(Math.random() * 6) + 1;
      this.setState({
        diceImg: `/img/dice${randomNumber}.png`,
      });
    }, 1000);
  };

  render() {
    return (
      <img
        className="dice"
        onClick={this.randomDice}
        src={this.state.diceImg}
        alt="dice picture"
      />
    );
  }
}

export default Dice;
