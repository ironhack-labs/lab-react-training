import React, { Component } from 'react'
import './Dice.css'

class Dice extends Component {
  state = { 
    dots: 0
  }

  
  randomDots = () => {
    console.log('dajksdlksjdkalj')
    this.setState({
      dots: Math.floor(Math.random() * 6 + 1)
    })
  }
  
  rollDice = () => {
    this.setState({ img: '/img/dice-empty.png' })
    setTimeout(() => {
      this.randomDots();
    }, 1000)
  }
  
  
  setImage = () => {
    
    if (this.state.dots > 0) {
      console.log('setImage number called')
      return `./img/dice${this.state.dots}.png`
    } else {
      console.log('setImage 0 called')
      return './img/dice-empty.png'
    };
  }
  
  render() {
    return (
      <div>
        <img className='Dice' src={this.setImage()} alt={this.state.dots} onClick={() => this.rollDice()}/>
      </div>
    )
  }
}

export default Dice;