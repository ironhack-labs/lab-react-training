import React, { Component } from 'react';
import './Dice.scss';

class Dice extends Component {
  randomDiceImage = () => {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1
  }

  state = {
    firstImage: this.randomDiceImage(),
  }
  
  changeDiceImage = () => {
    this.setState({
      firstImage: '-empty'
    })

    setTimeout(() => {
      this.setState({
        firstImage: '6'
      })
    }, 1000) 
  }

  render() {
    return (
      <div>
        <img className="dice-image" src={require(`../../assets/images/dice${this.state.firstImage}.png`).default} onClick={this.changeDiceImage} alt="dice" />
      </div>   
    )
  }
}

export default Dice;