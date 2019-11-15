import React, { Component } from "react";

export default class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture: this.props.img
    };

    this.changePicture = () => {
      this.setState({
        currentPicture:
          this.props.img === this.state.currentPicture
            ? this.props.imgClicked
            : this.props.img
      });
    };
  }
  render() {
    return (
      <div>
        <img
          src={this.state.currentPicture}
          alt="this.state.img"
          onClick={this.changePicture}
        />
      </div>
    );
  }
}
