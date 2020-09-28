import React, { Component } from 'react';
import './Carousel.css';

export default class Carousel extends Component {
  state = {
    imgs: this.props.imgs,
    activeImg: 0,
  };

  left = () => {
    this.state.activeImg === 0
      ? this.setState({
          activeImg: 3,
        })
      : this.setState({
          activeImg: this.state.activeImg - 1,
        });
  };
  right = () => {
    this.state.activeImg === 3
      ? this.setState({
          activeImg: 0,
        })
      : this.setState({
          activeImg: this.state.activeImg + 1,
        });
  };

  render() {
    return (
      <div>
        <img src={this.state.imgs[this.state.activeImg]} />
        <br />
        <button id="carousel-button" onClick={this.left}> ← </button>{' '}
        <button id="carousel-button" onClick={this.right}> → </button>
      </div>
    );
  }
}
