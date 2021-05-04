import React, { Component } from 'react';
import "./ClickablePicture.css"

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPic: this.props.img,
    };
  }

  swapPicture() {
    if (this.state.currentPic === this.props.img) {
      this.setState({ currentPic: this.props.imgClicked });
    } else {
      this.setState({ currentPic: this.props.img });
    }
  }

  render() {
    return (
      <img
        onClick={() => this.swapPicture()}
        src={this.state.currentPic}
        alt=""
      />
    );
  }
}

export default ClickablePicture;
