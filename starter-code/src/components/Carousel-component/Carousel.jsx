import React, { Component } from "react";

export default class Carousel extends Component {
  state = {
    currentImg: 0
  };
  decreaseArray = () => {
    console.log(this.state.currentImg);
    if (this.state.currentImg === 0) {
      this.setState({
        currentImg: this.props.images.length - 1
      });
    } else {
      this.setState({
        currentImg: this.props.currentImg - 1
      });
    }
  };

  increaseArray = () => {
    console.log(this.state.currentImg);
    if (this.state.currentImg === this.state.currentImg.length - 1) {
      this.setState({
        currentImg: 0
      });
    } else {
      this.setState({
        currentImg: this.state.currentImg + 1
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <img src={this.props.images[this.state.currentImg]} alt="" />
        </div>
        <div>
          <button onClick={e => this.decreaseArray()}>{"<="}</button>
          <button onClick={e => this.increaseArray()}>{"=>"}</button>
        </div>
      </div>
    );
  }
}
