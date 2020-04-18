// components/ClickablePicture.js

import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = {
    clicked: false,
  }

  handleClick = () => {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked,
    })
  }

  render() {
    const { img, imgClicked } = this.props;
    const { clicked } = this.state;
    const src = clicked ? imgClicked : img;
    const alt = src;
    return (
      <img
        src={src}
        alt={alt}
        onClick={this.handleClick}
        className='clickable-picture'
      />
    );
  }
}

export default ClickablePicture;
