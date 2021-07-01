import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageToDisplay: this.props.img,
      glasses: false,
    };
  }
  handleClick = () => {
    if (this.state.glasses === true) {
      return this.setState({
        imageToDisplay: this.props.img,
        glasses: false,
      });
    } else {
      return this.setState({
        imageToDisplay: this.props.imgClicked,
        glasses: true,
      });
    }
  };

  render() {
    return (
      <div>
        <img
          src={this.state.imageToDisplay}
          alt="img"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default ClickablePicture;
