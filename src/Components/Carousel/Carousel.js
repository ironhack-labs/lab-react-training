import React, { Component } from "react";
import style from "./Carousel.css";

class Carousel extends Component {
  state = {
    counter: 0,
  };

  rightImage = () => {
    this.state.counter < this.props.imgs.length - 1
      ? this.setState({
          counter: this.state.counter + 1,
        })
      : (this.state.counter = this.state.counter);
  };

  leftImage = () => {
    this.state.counter > 0
      ? this.setState({
          counter: this.state.counter - 1,
        })
      : (this.state.counter = 0);
  };

  render() {
    return (
      <div>
        <img src={this.props.imgs[this.state.counter]} />
        <br />
        <button onClick={this.leftImage}>Left</button>
        <button onClick={this.rightImage}>Right</button>
      </div>
    );
  }
}

export default Carousel;
