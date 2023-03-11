import React, { Component } from 'react';

import emptyDice from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'


class Dice extends Component {
  state = {
    currentPic: emptyDice
  }
  render() {
    const dicePics = [
      dice1,
      dice2,
      dice3,
      dice4,
      dice5,
      dice6  
    ]
    const handleClick = () => {
      this.setState({currentPic: emptyDice})
      setTimeout(() => {
        this.setState({currentPic: dicePics[Math.floor(Math.random() * dicePics.length)]})
      }, 1000)
    }
    return (
      <div>
        <img src={this.state.currentPic} onClick={handleClick} style={{width: '100px'}}/>
      </div>
    );
  }
}

export default Dice;