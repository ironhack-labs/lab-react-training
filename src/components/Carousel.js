import React, { Component } from 'react';

export default class Carousel extends Component {
  state = {
    imgs: [
      'https://randomuser.me/api/portraits/women/1.jpg',
      'https://randomuser.me/api/portraits/men/1.jpg',
      'https://randomuser.me/api/portraits/women/2.jpg',
      'https://randomuser.me/api/portraits/men/2.jpg',
    ],
    img: 'https://randomuser.me/api/portraits/women/1.jpg',
  };

  changeImgLeft = () => {
    let newImgidx = Number(this.state.imgs.indexOf(this.state.img)) - 1;
    newImgidx < 0
      ? this.setState({ img: this.state.imgs[3] })
      : this.setState({ img: this.state.imgs[newImgidx] });
  };

  changeImgRight = () => {
    let newImgidx = Number(this.state.imgs.indexOf(this.state.img)) + 1;
    newImgidx > 3
      ? this.setState({ img: this.state.imgs[0] })
      : this.setState({ img: this.state.imgs[newImgidx] });
  };

  render() {
    return (
      <div className="Carousel">
        <button onClick={this.changeImgLeft}>Left</button>
        <img src={this.state.img} alt="carousel" />
        <button onClick={this.changeImgRight}>Right</button>
      </div>
    );
  }
}
