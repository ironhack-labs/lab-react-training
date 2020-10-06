import React, { Component } from 'react';

class ClickablePicture extends React.Component {
  state = {
    img: false,
  };

  changeImage = () => {
    this.setState((prevState) => ({
      img: !prevState.img,
    }));
    console.log(this.state);
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
