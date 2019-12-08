import React, {Component} from 'react';

export default class Dice extends Component {
  state = {
    face: `/img/dice${Math.floor(Math.random() * 6) + 1}.png`
  }
  clickHandler = () => {
    this.setState({ face: '/img/dice-empty.png' })
    setTimeout(() => {
      this.setState({ face: `/img/dice${Math.floor(Math.random() * 6) + 1}.png` })}, 1000)
  }
  render() {
    return (
      <img src={this.state.face} onClick={this.clickHandler} alt="Dice" width="200" height="200" />
    )
  }
}
