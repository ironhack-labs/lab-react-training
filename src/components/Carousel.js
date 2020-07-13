import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIdx: 0,
    };
  }
  changeState(controller) {
    let carrouselLength = this.props.imgs.length;
    this.setState((prevState) => ({
      imgIdx:
        (prevState.imgIdx + controller + carrouselLength) % carrouselLength,
    }));
  }
  render() {
    let src = this.props.imgs[this.state.imgIdx];
    return (
      <div className="carousel">
        <button onClick={() => this.changeState(-1)}>Left</button>
        <img src={src} alt="carousel" />
        <button onClick={() => this.changeState(1)}>Right</button>
      </div>
    );
  }
}

export default Carousel;
