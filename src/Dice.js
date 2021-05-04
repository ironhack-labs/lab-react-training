import React from 'react';
import './index.css'

class Dice extends React.Component {
  state = {
    dice: "/img/dice-empty.png"
  }

  rollDice = () => {
    const img = ["/img/dice1.png", "/img/dice2.png", "/img/dice3.png", "/img/dice4.png", "/img/dice5.png", "/img/dice6.png"];
    const randomNumber = () => {
      return Math.floor(Math.random() * 6)
    }
    this.setState((state, props) => {
      return {
        dice: "/img/dice-empty.png"
      }
    })
    setTimeout(() => {
      this.setState((state, props) => {
        return {
          dice: img[randomNumber()]
        }
      })
    }, 1000)
  }

  render() {
    return (
      <img onClick={ this.rollDice } style={ { height: "400px" } } src={ this.state.dice } alt="" />
    )
  }
}

export default Dice