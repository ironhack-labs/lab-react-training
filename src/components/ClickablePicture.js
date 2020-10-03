import React, { Component } from 'react';

export default class ClickablePicture extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
    this.img = [props.img, props.imgClicked];
  }

  clickedImage() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    return (
      <img
        onClick={() => this.clickedImage()}
        src={this.img[this.state.clicked]}
      />
    );
  }
}
