import React, { Component } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default class Carousel extends Component {
  state = {
    imgIndex: 0
  }

  goLeft = () => {
    if (this.state.imgIndex - 1 >= 0) {
      this.setState({ imgIndex: this.state.imgIndex - 1 })
    }
  }

  goRight = () => {
    if (this.state.imgIndex + 1 < this.props.imgs.length) {
      this.setState({ imgIndex: this.state.imgIndex + 1 })
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.goLeft}>
          <FiChevronLeft />
        </button>

        <img src={this.props.imgs[this.state.imgIndex]} alt='a carousel' />

        <button onClick={this.goRight}>
          <FiChevronRight />
        </button>
      </div>
    )
  }
}
