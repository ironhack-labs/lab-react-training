import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = {
    img: true,
  };

  changeImage = () => {
    this.setState((prevState) => ({
      img: !prevState.img,
    }));
  };

  render() {
    return (
      <div>
        <img
          src={this.state.img ? this.props.img : this.props.imgClicked}
          onClick={this.changeImage}
          alt="img-clickable"
        />
      </div>
    );
  }
}

export default ClickablePicture;
