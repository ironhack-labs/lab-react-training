import React, { Component } from 'react';

class Dice extends Component {

  shuffleDice = (e) => {
    e.preventDefault();
    this.setState({dice: this.getRandomDice('-empty')})
    setTimeout(()=>{
      this.setState({dice: this.getRandomDice()})
    }, 1000)
  }

  getRandomDice = (rndNumber = -1) => {
    if(rndNumber < 0) rndNumber = Math.floor(Math.random() * 5 + 1);
    return (
      <img 
        src={`../img/dice${rndNumber}.png`} 
        style={{height: '10rem'}} 
        alt={`Dice${rndNumber}`}
        onClick={this.shuffleDice} 
      />
    )
  }

  state = {
    dice: this.getRandomDice()
  }

  render() {
    return (
      <div>
        {this.state.dice}
      </div>
    );
  }
}

export default Dice;