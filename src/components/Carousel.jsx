import React, { Component } from 'react';

export default class Carousel extends Component {
  state = {
    imgIndex: 0,
  };

  previousImage = () => {
    if (this.state.imgIndex > 1) {
      this.setState({
        imgIndex: this.state.imgIndex - 1,
      });
    } else {
      this.setState({
        imgIndex: 3,
      });
    }
  };

  nextImage = () => {
    if (this.state.imgIndex < 3) {
      this.setState({
        imgIndex: this.state.imgIndex + 1,
      });
    } else {
      this.setState({
        imgIndex: 0,
      });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.previousImage}>previous</button>
        <img src={this.props.imgs[this.state.imgIndex]} alt="img" />
        <button onClick={this.nextImage}>next</button>
      </div>
    );
  }
}
