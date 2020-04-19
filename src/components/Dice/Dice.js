import React, { Component } from 'react';

class Dice extends Component {
  state = {
    value: 0,
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
    )
  }
}

export default Dice;