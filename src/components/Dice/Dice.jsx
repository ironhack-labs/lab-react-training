import React, { Component } from "react";
import "./Dice.css";

export default class Dice extends Component {
  state = {
    currentImage: null,
  };

  randomPictures = () => {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    let randomPicture = `/img/dice${randomNumber}.png`;
    return randomPicture;
  }

  handleClick = () => {
    let emptyPicture = `/img/dice-empty.png`;
    const randomPicture = this.randomPictures();
    setTimeout(() => {
        this.setState({currentImage: randomPicture})
    }, 1000)
    this.setState({ currentImage: emptyPicture });
    
  };

  componentDidMount(){
    const initialImage = this.randomPictures();
    this.setState({currentImage: initialImage})
}

  render() {
    return (
      <div className="dices">
          <img src={this.state.currentImage} onClick={this.handleClick} alt="dices" />
      </div>
    );
  }
}
