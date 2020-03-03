import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  moveRight() {
    this.setState(previousState => ({
      index: previousState.index === 3 ? 0 : previousState.index + 1
    }));
  }

  moveLeft() {
    this.setState(previousState => ({
      index: previousState.index === 0 ? 3 : previousState.index - 1
    }));
  }

  render() {
    const { imgs } = this.props;
    return (
      <div className="Carousel">
        <button onClick={this.moveLeft}>Left</button>
        <img src={imgs[this.state.index]} alt="carousel" />
        <button onClick={this.moveRight}>Right</button>
      </div>
    );
  }
}

export default Carousel;
