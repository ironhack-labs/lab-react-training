import React, { Component } from 'react';

class Dice extends Component {
  pictures = [
    '/img/dice1.png',
    '/img/dice2.png',
    '/img/dice3.png',
    '/img/dice4.png',
    '/img/dice5.png',
    '/img/dice6.png',
  ];
  getRandomPicture = () => {
    return this.pictures[
      Math.floor(Math.random() * Math.floor(this.pictures.length))
    ];
  };
  state = {
    image: this.getRandomPicture(),
  };
  handleClick = () => {
      this.setState({image : "/img/dice-empty.png"});
      setTimeout(()=> this.setState({image: this.getRandomPicture()}), 1000)
  };
  render() {
    return (
      <div>
        <img
          style={{
            width: 200,
          }}
          onClick={this.handleClick}
          src={this.state.image}
          alt="random dice"
        />
      </div>
    );
  }
}

export default Dice;
