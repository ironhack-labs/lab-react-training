import React, { Component } from 'react';

class Dice extends Component {
  state = {
    value: 0,
<<<<<<< HEAD
    img: '/img/dice-empty.png',
  }

  rollDice = () => {
    let img = '/img/dice-empty.png';
    this.setState({ img: img }); 
    setTimeout(() => {
    let result = parseInt(6 * Math.random() + 1);
      switch (result) {
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
          break;
      }
      this.setState({img: img})
    }, 1000);
  }



  render(){
    const { img } = this.state;
    return (
      <div><p>Click on the dice</p><img style={{'width': '100px', 'marginLeft': '50px'}} onClick={this.rollDice} src={img} alt="dice" /></div>
=======
  }

  rollDice = () => {
    let result = 0
    setTimeout(() => {
      result = Math.floor(Math.random() * (6 - 0)) + 0;
    }, 1000);
  }

  changeDice = (result) => {
    switch (result) {
      case 1:
        return '/img/dice1.png';
      case 2:
        return '/img/dice2.png';
      case 3:
        return '/img/dice3.png';
      case 4:
        return '/img/dice4.png';
      case 5:
        return '/img/dice5.png';
      case 6:
        return '/img/dice6png';
      default:
        return '/img/dice-empty.png';
    }
  }

  render(){
    return (
      <div><img onClick={this.rollDice} src={this.changeDice} alt="dice" /></div>
>>>>>>> 162a313c2fb2da69a98af0b11a7fee2ddf36461d
    )
  }
}

export default Dice;