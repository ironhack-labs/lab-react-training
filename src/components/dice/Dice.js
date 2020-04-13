import React, { Component } from "react";

export default class Dice extends Component {
  state = {
    active: false,
  };

  randomImg = () => {
    const dices = [
      "/img/dice1.png",
      "/img/dice2.png",
      "/img/dice3.png",
      "/img/dice4.png",
      "/img/dice5.png",
      "/img/dice6.png",
    ];

    const indx = Math.floor(Math.random() * dices.length);

    return dices[indx];
  };

  changePicture = (img, newImg) => {
    let currentImg = img;

    if (this.state.active) {
      currentImg = newImg;
    }

    return currentImg;
  };

  setImage = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const img = "/img/dice1.png";
    const newImg = this.randomImg();
    return (
      <div>
        <img
          onClick={this.setImage}
          className="clickablePicture"
          src={this.changePicture(img, newImg)}
          alt="image"
        />
      </div>
    );
  }
}
