import React, { Component } from 'react';

export default class ClickablePicture extends Component {
  state = {
    clickedPicture: false,
  };
  handlePictureClick = () => {
    this.setState((state) => ({
      clickedPicture: !this.state.clickedPicture,
    }));
  };
  render(props) {
    console.log(this.props);
    return (
      <div>
        <img
          className="imgClicked"
          onClick={this.handlePictureClick}
          src={
            this.state.clickedPicture ? this.props.imgClicked : this.props.img
          }
          alt=""
        />
      </div>
    );
  }
}
