import React, { Component } from "react";

export default class Clickable extends Component {
  state = {
    showImage: "/img/dice1.png"
  };
  changeImage = () => {
    this.setState({ showImage: "/img/dice-empty.png" });
    setTimeout(
      this.setState({
        showImage: `/img/dice${Math.floor(Math.random() * 6) + 1}.png`
      }),
      10000
    );
  };
  render() {
    return (
      <img
        src={this.state.showImage}
        alt="jeje"
        onClick={() => this.changeImage()}
      />
    );
  }
}
