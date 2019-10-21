import React from 'react';

class Dice extends React.Component {
  state = {
    img: `/img/dice${Math.floor(Math.random() * 6) + 1}.png`
  }

  clickHandler = () => {
    this.setState({ img: '/img/dice-empty.png' })
    setTimeout(() => {
      this.setState({ img: `/img/dice${Math.floor(Math.random() * 6) + 1}.png` })
    }, 1000)

  }

  render() {
    return (
      <img src={this.state.img} onClick={this.clickHandler} alt="dice" className="Dice" />
    )
  }
}

export default Dice;