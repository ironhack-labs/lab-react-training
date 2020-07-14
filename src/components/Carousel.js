import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: this.props.imgs[0],
      currentNumber: 0,
    };
    this.carouselImages = this.props.imgs;
  }

  previousImage() {
    if (this.state.currentNumber === 0) {
      this.setState({
        currentImage: this.props.imgs[3],
        currentNumber: 3,
      });
    } else {
      const newNumber = this.state.currentNumber - 1;
      this.setState({
        currentImage: this.props.imgs[newNumber],
        currentNumber: newNumber,
      });
    }
  }

  nextImage() {
    if (this.state.currentNumber === 3) {
      this.setState({
        currentImage: this.props.imgs[0],
        currentNumber: 0,
      });
    } else {
      const newNumber = this.state.currentNumber + 1;
      this.setState({
        currentImage: this.props.imgs[newNumber],
        currentNumber: newNumber,
      });
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.previousImage()}>Left</button>
        <img
          src={this.state.currentImage}
          alt="carousel element"
          style={{ width: '200px' }}
        />
        <button onClick={() => this.nextImage()}>Right</button>
      </div>
    );
  }
}

export default Carousel;
