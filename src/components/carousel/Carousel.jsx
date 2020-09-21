import React from 'react';
import './Carousel.css';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: this.props.imgs[0] };
  }

  rightMove() {
    if (this.state.img === this.props.imgs[0]) {
      this.setState({ img: this.props.imgs[1] });
    } else if (this.state.img === this.props.imgs[1]) {
      this.setState({ img: this.props.imgs[2] });
    } else if (this.state.img === this.props.imgs[2]) {
      this.setState({ img: this.props.imgs[3] });
    } else {
      this.setState({ img: this.props.imgs[0] });
    }
  }

  leftMove() {
    if (this.state.img === this.props.imgs[0]) {
      this.setState({ img: this.props.imgs[3] });
    } else if (this.state.img === this.props.imgs[3]) {
      this.setState({ img: this.props.imgs[2] });
    } else if (this.state.img === this.props.imgs[2]) {
      this.setState({ img: this.props.imgs[1] });
    } else {
      this.setState({ img: this.props.imgs[0] });
    }
  }

  render() {
    return (
      <div className="carousel-container">
        <button className="flex-item btn" onClick={() => this.leftMove()}>
          {' '}
          Left
        </button>
        <img className="carousel-img flex-item" src={this.state.img} />
        <button className="flex-item btn" onClick={() => this.rightMove()}>
          {' '}
          Right
        </button>
      </div>
    );
  }
}
