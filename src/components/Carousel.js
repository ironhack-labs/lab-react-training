// components/Carousel.js

import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    current: 0,
  }

  left = (length) => {
    const { current } = this.state;
    this.setState ({
      current: current > 0 ? current - 1 : length - 1,
    })
  }

  right = (length) => {
    const { current } = this.state;
    this.setState ({
      current: current === length - 1 ? 0 : current + 1,
    })
  }

  render() {
    const { current } = this.state;
    const { imgs } = this.props;
    const { length }  = imgs;
    return (
      <div className='carousel'>
        {imgs.map((img, index) => {
          return index === current ? <img key={index} alt='carousel' src={img}/> : null;
        })}
        <br />
        <button onClick={e => this.left(length)}>Left</button>
        <button onClick={e => this.right(length)}>Right</button>
      </div>
    );
  }
}

export default Carousel;
