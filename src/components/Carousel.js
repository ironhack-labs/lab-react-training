import React, { Component } from 'react';

export default class Carousel extends Component {
  state = {
    position: 0,
  };

  clickLeft = () => {
    if (this.state.position > 0) {
      this.setState((state) => ({
        position: state.position - 1,
      }));
    }
    // console.log(this.state.position);
  };

  clickRight = () => {
    if (this.state.position < 3) {
      this.setState((state) => ({
        position: state.position + 1,
      }));
    }
    // console.log(this.state.position);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.imgs[`${this.state.position}`]} alt="" />
        <button onClick={this.clickLeft}>Left</button>
        <button onClick={this.clickRight}>Right</button>
      </div>
    );
  }
}
