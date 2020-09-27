import React, { Component } from 'react';
import './ClickablePicture.css';

class ClickablePicture extends Component {
  state = {
    picDisplay: this.props.img,
  };

  togglePicture = () => {
    this.setState((prevState, props) => {
      const newPic =
        prevState.picDisplay === props.img ? props.imgClicked : props.img;
      return { picDisplay: newPic };
    });
  };

  render() {
    return (
      <div>
        <img
          onClick={this.togglePicture}
          className="click-pic"
          src={this.state.picDisplay}
        />
      </div>
    );
  }
}

export default ClickablePicture;
