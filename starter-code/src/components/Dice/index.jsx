import React, { Component } from 'react';

class index extends Component {
  constructor() {
    super();
    this.state = {
      dice: './img/dice-empty.png'
    };
    this.changePicture = this.changePicture.bind(this);
  }
  changePicture() {
    this.setState({
      dice: './img/dice-empty.png'
    });
    setTimeout(x => {
      let diceImg = '';
      switch (Math.floor(Math.random() * 6) + 1) {
        case 1:
          diceImg = './img/dice1.png';
          break;
        case 2:
          diceImg = './img/dice2.png';
          break;
        case 3:
          diceImg = './img/dice3.png';
          break;
        case 4:
          diceImg = './img/dice4.png';
          break;
        case 5:
          diceImg = './img/dice5.png';
          break;
        default:
          diceImg = './img/dice6.png';
          break;
      }
      this.setState({
        dice: diceImg
      });
    }, 1000);
  }

  render() {
    return (
      <button onClick={this.changePicture}>
        <img
          style={{ width: '300px', margin: '5% auto' }}
          src={process.env.PUBLIC_URL + this.state.dice}
          alt="hello"
        />
      </button>
    );
  }
}

export default index;
