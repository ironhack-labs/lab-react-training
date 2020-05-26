import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor() {
    super();
    this.state = {
      img: '/img/persons/maxence.png',
      clicked: false,
    };
  }

  changeImage = () => {
    if (this.state.clicked) {
      this.setState({
        clicked: !this.state.clicked,
        img: '/img/persons/maxence.png',
      });
    } else {
      this.setState({
        clicked: !this.state.clicked,
        img: '/img/persons/maxence-glasses.png',
      });
    }
  };

  render() {
    return (
      <img
        src={this.state.img}
        onClick={this.changeImage}
        alt="clickableImage"
      />
    );
  }
}

export default ClickablePicture;
