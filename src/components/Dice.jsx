import React from 'react'
import './Dice.css'

export default class Dice extends React.Component {
  constructor() {
    super();
    this.images = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png', '/img/dice-empty.png']
    this.state = {
      img: this.images[0]
    }
  }

  getRandomeImg() {
    const randomPosition = Math.floor(Math.random() * 5)
    setTimeout(() => {
      this.setState({
        img: this.images[randomPosition]
      })
    }, 1000)
    this.setState({
      img: this.images[6]
    })
  }

  render() {
    return (
      <img 
        src={this.state.img} 
        className="Dice"
        onClick={() => this.getRandomeImg()}
      />
    );
  }
}

