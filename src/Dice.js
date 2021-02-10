import React, { Component } from 'react';

class Dice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.randomValue()
    }
    this.handleClick = this.handleClick.bind(this)
  }
  randomValue() {
    return Math.floor(6*Math.random() + 1)
  }
  handleClick() {
    if (this.state.value) {
      this.setState(prevState => ({
        value: null
      }))
      setTimeout(() => {
        this.setState(prevState => ({
          value: this.randomValue()
        }))
      }, 1000)
    }
  }
  render() {
    let src; 
    if (this.state.value) 
      src = `/img/dice${this.state.value}.png`
    else
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