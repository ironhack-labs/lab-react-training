import React, { Component } from 'react';

class Dice extends Component {
  state = {
    img: './img/dice3.png',
  };

  handleClick = () => {
      var dices = ['./img/dice1.png','./img/dice2.png','./img/dice3.png','./img/dice4.png','./img/dice5.png','./img/dice6.png']
      var randomDice = dices[Math.floor(Math.random()*dices.length)]
      this.setState({img: "./img/dice-empty.png"})
      setTimeout(() => {
          this.setState({img: randomDice})
        }, 1000)
  }

  render() {
    return <div><img className="dice" onClick={this.handleClick} src={this.state.img} alt=""/></div>;
  }
}

export default Dice;
