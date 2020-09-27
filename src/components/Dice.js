import React, { Component } from 'react';

export default class Dice extends Component {
  state = {
    dicePicArr: [
      '/img/dice-empty.png',
      '/img/dice1.png',
      '/img/dice2.png',
      '/img/dice3.png',
      '/img/dice4.png',
      '/img/dice5.png',
      '/img/dice6.png',
    ],
    image: `/img/dice1.png`,
  };

  changeImg = () => {
    let randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    let newImg = this.state.dicePicArr[randomNumber];

    this.setState({ image: `img/dice-empty.png` });
    setTimeout(() => {
      this.setState({
        randomNumber: randomNumber,
        image: newImg,
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <img
          onClick={this.changeImg}
          src={this.state.image}
          alt="dice"
          style={{ width: '200px', cursor: 'pointer' }}
        />
      </div>
    );
  }
  // I TRIED TO MAKE IT MORE ABSTRACT - not working
  //   state = {
  //     randomNumber: 1,
  //     image: `img/dice${this.state.randomNumber}.png`,
  //   };
  //   changeImg = () => {
  //     let randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
  //     this.setState({ image: `img/dice-empty.png` });
  //     setTimeout(() => {
  //       this.setState({
  //         randomNumber: randomNumber,
  //         image: `img/dice${this.state.randomNumber}.png`,
  //       });
  //     }, 1000);
  //   };
  //   render() {
  //     return (
  //       <div>
  //         <img
  //           style={{ width: '100px' }}
  //           onClick={this.changeImg}
  //           src={this.state.image}
  //           alt="dice"
  //         ></img>
  //       </div>
  //     );
  //   }
}
