import React, { Component } from "react";

export default class ClickablePicture extends Component {
  state = {
    photoToggle: true
  };

  changePhoto = () => {
    this.setState({
      photoToggle: !this.state.photoToggle
    });
  };

  render() {
    return (
      <div>
        <img
          src={this.state.photoToggle ? this.props.img : this.props.imgClicked}
          alt="Clickable"
          onClick={this.changePhoto}
          width="220px"
        />
      </div>
    );
  }
}
