import React, { Component } from 'react'

import dice0 from '../../../src/assets/images/dice-empty.png';
import dice1 from '../../../src/assets/images/dice1.png';
import dice2 from '../../../src/assets/images/dice2.png';
import dice3 from '../../../src/assets/images/dice3.png';
import dice4 from '../../../src/assets/images/dice4.png';
import dice5 from '../../../src/assets/images/dice5.png';
import dice6 from '../../../src/assets/images/dice6.png';



export default class Dice extends Component {
    state = {
        randomDice: dice1
    }

    randomDice = () => {
        const dices = [dice1, dice2, dice3, dice4, dice5, dice6]
        this.setState({
           randomDice: dice0
        })
        setTimeout(() => {
            this.setState({
                randomDice: dices[Math.floor(Math.random()*dices.length)]
            })
        }, 1000);
    }



  render() {
    return (
      <div>
          <img onClick={this.randomDice} src={this.state.randomDice} 
          style={{ width: "150px", height: "150px"}} 
          alt="img" />
      </div>
    )
  }
}
