import React, { Component } from "react";

export default class Carousel extends Component {
  state = {
    index: 0,
  };

  images = () => {
    let img = [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/women/2.jpg",
      "https://randomuser.me/api/portraits/men/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
    ];

    // console.log(img[this.state.index]);
    return img[this.state.index];
  };
  setImageL = () => {
    if (this.state.index >= 0) {
      this.setState({ index: this.state.index - 1 });
    }
  };
  setImageR = () => {
    if (this.state.index <= 3) {
      this.setState({ index: this.state.index + 1 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.setImageL}>left</button>
        <img src={this.images()} alt="carousel"></img>
        <button onClick={this.setImageR}>right</button>
      </div>
    );
  }
}
