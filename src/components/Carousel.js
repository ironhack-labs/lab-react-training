import React, { Component } from 'react';

export default class Carousel extends Component {
  state = {
    images: this.props.imgs,
    index: 0,
  };

  right = () => {
    this.setState((state) => {
      console.log(state.index);
      return { index: (state.index + 1) % state.images.length };
    });
  };

  left = () => {
    this.setState((state) => {
      //   console.log((state.index - 1) % state.images.length);
      console.log(state.index);
      return {
        index:
          state.index === 0
            ? state.images.length - 1
            : (state.index - 1) % state.images.length,
      };
    });
  };

  render() {
    return (
      <div className="carousel">
        <button onClick={this.left}>left</button>
        <img src={this.state.images[this.state.index]} alt="" />
        <button onClick={this.right}>right</button>
      </div>
    );
  }
}
