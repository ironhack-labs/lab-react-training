import React, { Component } from 'react';

class Carousel extends Component {
  constructor(){
    super();
    this.state = {
      index: 0
    }
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  moveLeft() {
    let currentIndex = 0;
    this.setState(previousState => {
      (previousState.index === 0) ? currentIndex = 3 : currentIndex = --previousState.index;
      return {
        index: currentIndex
      }
    })
  }

  moveRight() {
    let currentIndex = 0;
    this.setState(previousState => {
      (previousState.index === 3) ? currentIndex = 0 : currentIndex = ++previousState.index;
      return {
        index: currentIndex
      }
    })
  }

  render() {
    const { imgs } = this.props;

    return (
      <div className="carousel">
        <button onClick={this.moveLeft}>Move Left</button>
          <img src={imgs[this.state.index]} alt="carousel"></img>
        <button onClick={this.moveRight}>Move Right</button>
      </div>
    );
  }
}

export default Carousel;