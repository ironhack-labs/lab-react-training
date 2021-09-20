import React, { Component } from 'react';

export class ClickablePicture extends Component {
  state = {
    picture: false,
  };
  clickHandler = () => {
    this.setState({ picture: !this.state.picture });
  };
  render() {
    return (
      <div className="border-box">
        <img
          onClick={this.clickHandler}
          src={this.state.picture ? this.props.img : this.props.imgClicked}
          alt=""
        />
      </div>
    );
  }
}

export default ClickablePicture;
