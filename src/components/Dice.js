import React, { Component } from 'react'

export default class Dice extends Component {
  constructor(){
    super()
    this.pictures = [
      '/img/dice1.png',
      '/img/dice2.png',
      '/img/dice3.png',
      '/img/dice4.png',
      '/img/dice5.png',
      '/img/dice6.png',
    ]
    this.state = {
      actualPicture: this.pickPicture()
    }
  }

  pickPicture(){
    return this.pictures[Math.floor(Math.random() * ((this.pictures.length-1) - 0 + 1) + 0)]
  }

  handleDice = () => {
    this.setState({
      actualPicture: '/img/dice-empty.png'
    })
    setTimeout(() => {
      this.setState({
        actualPicture: this.pickPicture()
      })
    }, 1000);
  }

  render() {
    return <img onClick={this.handleDice} className="dice" src={this.state.actualPicture} alt=""/>
  }
}
