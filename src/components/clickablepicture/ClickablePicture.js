import React, { Component } from 'react';

export default class ClickablePicture extends Component {
  state = {
    isClicked: false,
    imgUrl: this.props.img,
  };

  handleOnClick = () => {
    let image;
    this.state.isClicked
      ? (image = this.props.img)
      : (image = this.props.imgClicked);

    this.setState(
      {
        // this returns the opposite of what is currently in isClicked
        isClicked: !this.state.isClicked,
        imgUrl: image,
      },
      //this lets us know immediately what the state is
      () => console.log(this.state.isClicked, image)
    );
  };

  render() {
    return (
      <div id="img-container">
        <img
          onClick={this.handleOnClick}
          src={this.state.imgUrl}
          alt="Head Shot"
        />
      </div>
    );
  }
}
