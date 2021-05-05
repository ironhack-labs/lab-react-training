import React, { Component } from 'react';

export default class Carousel extends Component {
  state = {
    imgs: [
      'https://randomuser.me/api/portraits/women/1.jpg',
      'https://randomuser.me/api/portraits/men/1.jpg',
      'https://randomuser.me/api/portraits/women/2.jpg',
      'https://randomuser.me/api/portraits/men/2.jpg',
    ],
    currentIndex: 0,
  };

  handleClick = () => {
    this.setState((state) => ({
      currentIndex: (state.currentIndex + 1) % state.imgs.length,
    }));
  };

  render() {
    const { imgs, currentIndex } = this.state;
    return (
      <div className="Col">
        <img
          className="clickable-picture"
          src={imgs[currentIndex]}
          alt="pic"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
