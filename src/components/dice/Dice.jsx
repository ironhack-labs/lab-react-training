import React from 'react';
import './Dice.css';

export default class Dice extends React.Component {

  state = {
    src: `/img/dice${Math.ceil(Math.random() * 6)}.png`
  };

  rollDice = () => {
    this.setState({
      src: '/img/dice-empty.png'
    });

    setTimeout(() => this.setState({
      src: `img/dice${Math.ceil(Math.random() * 6)}.png`
    }), 1000
    )
  }

  render() {
    return (
      <div className='Dice'>
        <img onClick={this.rollDice} src={this.state.src} alt='Rolling Dice'></img>
      </div>
    )
  }
}