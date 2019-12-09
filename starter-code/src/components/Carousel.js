import React, { Component } from "react";

class Carousel extends Component {
  state = {
    imageNumber: 1
  };

  leftClick = () => {
    this.setState({
      imageNumber:
        this.state.imageNumber > 0
          ? this.state.imageNumber - 1
          : this.props.imgs.length - 1
    });
  };
  rightClick = () => {
    this.setState({
      imageNumber: this.state.imageNumber < 3 ? this.state.imageNumber + 1 : 0
    });
  };
  render() {
    return (
      <div className="carousel">
        <button onClick={this.leftClick}>left</button>
        <img src={this.props.imgs[this.state.imageNumber]} alt="" />
        <button onClick={this.rightClick}>right</button>
      </div>
    );
  }
}

export default Carousel;