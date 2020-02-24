import React from "react";

const images = [
  "/img/dice1.png",
  "/img/dice2.png",
  "/img/dice3.png",
  "/img/dice4.png",
  "/img/dice5.png",
  "/img/dice6.png"
];

const numImgs = images.length;

class Dice extends React.Component {
  state = {
    imgPath: images[Math.floor(Math.random() * numImgs)]
  }

  handleClick = () => {
    let idx = Math.floor(Math.random() * numImgs);
    this.setState({
      imgPath: "/img/dice-empty.png"
    });
    setTimeout(() => {
      this.setState({
        imgPath: images[idx]
      })
    }, 1000)
  };

  render(){
    return (
      <img onClick={this.handleClick} className="Dice" src={this.state.imgPath} alt="Dice"/>
    );
  }
}

export default Dice;