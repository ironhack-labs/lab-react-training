import React, { Component } from 'react';

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = { number: this.getRandom };
  }

  getRandom = () => {
    this.setState({
      number: Math.floor(Math.random() * (6 - 1) + 1),
    });
  };

  changeState = () => {
    if (this.state.number) {
      this.setState(() => ({
        number: 0,
      }));
      setTimeout(() => {
        this.setState(() => ({
          number: this.getRandom(),
        }));
      }, 1000);
    }
  };

  diceImg = () => {
    let img = '';

    switch (this.state.number) {
      case 1:
        img = '/img/dice1.png';
        break;
      case 2:
        img = '/img/dice2.png';
        break;
      case 3:
        img = '/img/dice3.png';
        break;
      case 4:
        img = '/img/dice4.png';
        break;
      case 5:
        img = '/img/dice5.png';
        break;
      case 6:
        img = '/img/dice6.png';
        break;
      default:
        img = '/img/dice-empty.png';
    }

    return img;
  };

  render() {
    return (
      <div>
        <img
          className="dice"
          onClick={this.changeState}
          src={this.diceImg()}
          alt="dice"
        />
      </div>
    );
  }
}

export default Dice;
