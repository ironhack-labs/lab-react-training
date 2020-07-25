import React, { Component } from 'react';

export class Dice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '/img/dice-empty.png',
    };
  }

  pickRandom = () => {
    const dices = [
      '/img/dice1.png',
      '/img/dice2.png',
      '/img/dice3.png',
      '/img/dice4.png',
      '/img/dice5.png',
      '/img/dice6.png',
    ];
    const random = Math.floor(Math.random() * dices.length);
    return dices[random];
  };

  changedice = () => {
    this.setState({
      imagen: '/img/dice-empty.png',
    });

    setTimeout(() => {
      this.setState({
        imagen: this.pickRandom(),
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <img
          className="dice"
          src={this.state.imagen}
          alt="dice"
          onClick={this.changedice}
        />
      </div>
    );
  }
}

export default Dice;
