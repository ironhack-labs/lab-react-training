import React, { Component } from 'react';

class Dice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.getRandomValue()
    }
    this.handleClick = this.handleClick.bind(this)
  }
  // Return a random number between 1 and 6 (no need to bind)
  getRandomValue() {
    return 1 + Math.floor(6*Math.random())
  }
  handleClick() {
    if (this.state.value) {
      this.setState(prevState => ({
        value: null
      }))
      setTimeout(() => {
        this.setState(prevState => ({
          value: this.getRandomValue()
        }))
      }, 1000)
    }
  }
  render() {
    let src; 
    if (this.state.value) // if the value is 1,2,3,4,5,6 
      src = `/img/dice${this.state.value}.png`
    else // if the value is null
      src = `/img/dice-empty.png`
    return (
      <img 
        className="Dice" 
        onClick={this.handleClick}
        src={src} 
        alt="Dice"/>
    );
  }
}

export default Dice;
