import React from 'react';

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: './img/dice-empty.png',
    };
    this.click = this.click.bind(this);
  }

  click() {
    const imgArray = [
      './img/dice1.png',
      './img/dice2.png',
      './img/dice3.png',
      './img/dice4.png',
      './img/dice5.png',
      './img/dice6.png',
    ];
    const randomNumber = Math.floor(Math.random() * imgArray.length);
    setTimeout(() => this.setState({ img: imgArray[randomNumber] }), 1000);
  }

  render() {
    return (
      <img className="Dice" onClick={this.click} src={this.state.img} alt="" />
    );
  }
}

export default Dice;
