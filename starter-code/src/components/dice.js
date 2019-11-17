import React, { Component } from 'react'

export class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedDice: '/img/dice1.png',
      dice: {
        0: '/img/dice1.png',
        1: '/img/dice2.png',
        2: '/img/dice3.png',
        3: '/img/dice4.png',
        4: '/img/dice5.png',
        5: '/img/dice6.png'
      }
    }
}
toggleDice = () => {
  this.setState ({
    displayedDice: '/img/dice-empty.png'
  })
  setTimeout(()=> {
    this.setState ({
      displayedDice: this.state.dice[Math.floor(Math.random() * 6)]
    })
  }, 1000)
}
  render() {
    return (
      <div>
        <img className="Dice" onClick={this.toggleDice} src={this.state.displayedDice} alt="" />
      </div>
    )
  }
}

export default Dice
