import React, { Component } from 'react';

class Dice extends Component {
  state = {
    image: '/img/dice3.png',
  };

  clickHandler = () => {
    const max = 7;
    const min = 1;
    const randomFaceNumber = Math.floor(Math.random() * (max - min)) + min;
    console.log(randomFaceNumber);

    let imgUrl = '';

    switch (randomFaceNumber) {
        case 1:
            imgUrl = '/img/dice1.png'
            break;
        case 2:
            imgUrl = '/img/dice2.png'
            break;
        case 3:
            imgUrl = '/img/dice3.png'
            break;
        case 4:
            imgUrl = '/img/dice4.png'
            break;
        case 5:
            imgUrl = '/img/dice5.png'
            break;
        case 6:
            imgUrl = '/img/dice6.png'
            break;
        default:
            break;
    }

    this.setState({
        image: '/img/dice-empty.png'
    })

    setTimeout(() => {
        this.setState({
            image: imgUrl
        })
    }, 1000);


  };
  render() {
    return (
      <img
        onClick={this.clickHandler}
        src={this.state.image}
        width="250"
        height="250"
        alt=""
      />
    );
  }
}

export default Dice;
