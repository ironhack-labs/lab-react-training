import React, { Component } from 'react';

export default class Carousel extends Component {
  state = {
    imageDisplayed: this.props.imgs[0],
    index: 0,
  };

  clickLeft = () => {
    let newIndex = this.state.index;
    newIndex > 0 ? newIndex-- : (newIndex = this.props.imgs.length - 1);

    this.setState(
      {
        index: newIndex,
      },
      () => this.displayImage()
    );
  };

  clickRight = () => {
    let newIndex = this.state.index;
    newIndex < this.props.imgs.length - 1 ? newIndex++ : (newIndex = 0);

    this.setState(
      {
        index: newIndex,
      },
      () => this.displayImage()
    );
  };

  displayImage = () => {
    const imageArr = [this.props.imgs[this.state.index]];
    this.setState({
      imageDisplayed: imageArr,
    });
  };

  render() {
    return (
      <div>
        <h1>Carousel</h1>
        <div>
          <button onClick={this.clickLeft}>Left</button>
          <button onClick={this.clickRight}>Right</button>
          <img src={this.state.imageDisplayed} alt="Person" />
        </div>
      </div>
    );
  }
}
