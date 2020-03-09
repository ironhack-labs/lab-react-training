import React, { Component } from 'react';
import './style.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.imgs[0]
    };
    this.turnLeft = this.turnLeft.bind(this);
    this.turnRight = this.turnRight.bind(this);
  }
  turnLeft() {
    const imgs = this.props.imgs;
    this.setState(previousState => ({
      img:
        (previousState.img === imgs[0] && imgs[3]) ||
        (previousState.img === imgs[1] && imgs[0]) ||
        (previousState.img === imgs[2] && imgs[1]) ||
        (previousState.img === imgs[3] && imgs[2])
    }));
  }

  turnRight() {
    const imgs = this.props.imgs;
    this.setState(previousState => ({
      img:
        (previousState.img === imgs[0] && imgs[1]) ||
        (previousState.img === imgs[1] && imgs[2]) ||
        (previousState.img === imgs[2] && imgs[3]) ||
        (previousState.img === imgs[3] && imgs[0])
    }));
  }
  render() {
    // const { img, imgClicked } = this.props;

    return (
      <div>
        <span onClick={this.turnLeft}> ARROW LEFT </span>
        <img src={this.state.img} alt="nice" />
        <span onClick={this.turnRight}>ARROW RIGHT </span>
      </div>
    );
  }
}

export default Carousel;
