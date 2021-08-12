import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    currentIndex: 0,
  };

  showPrevImg = () => {
    this.setState({
      //currentIndex: console.log('previous'),
      currentIndex:
        this.state.currentIndex === 0
          ? this.props.imgs.length - 1
          : this.state.currendIndex - 1,
    });
  };

  showNextImg = () => {
    this.setState({
      //currentIndex: console.log('next'),
      currentIndex:
        this.state.currentIndex === this.props.imgs.length - 1
          ? 0
          : this.state.currentIndex + 1,
    });
  };

  render(props) {
    // const randomIndex = Math.floor(Math.random() * this.props.imgs.length);
    // const randomImg = this.props.imgs[randomIndex];

    return (
      <div>
        <button onClick={this.showPrevImg}>Left</button>
        <img src={this.props.imgs[this.state.currentIndex]} alt="carouselImg" />
        <button onClick={this.showNextImg}>Right</button>
      </div>
    );
  }
}

export default Carousel;
