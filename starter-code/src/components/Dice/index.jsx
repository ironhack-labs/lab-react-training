import React, { Component } from 'react';
import './style.scss';

class Dice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: '/img/dice-empty.png'
    };
    this.changeImg = this.changeImg.bind(this);
  }
  changeImg() {
    const diceImgs = [
      '/img/dice1.png',
      '/img/dice2.png',
      '/img/dice3.png',
      '/img/dice4.png',
      '/img/dice5.png',
      '/img/dice6.png'
    ];
    const diceZero = '/img/dice-empty.png';
    const random = Math.floor(Math.random() * (diceImgs.length - 1));

    this.setState({ img: diceZero });
    setTimeout(() => {
      this.setState({ img: diceImgs[random] });

      // img: diceImgs[random];
    }, 1000);
    // });

    //

    // return 3;
    // img: diceImgs[random]
    // img: (previousState.img === this.props.img && this.props.imgClicked) || this.props.img
  }

  render() {
    // const { img, imgClicked } = this.props;

    return <img className="dice" onClick={this.changeImg} src={this.state.img} alt="nice" />;
  }
}

export default Dice;
