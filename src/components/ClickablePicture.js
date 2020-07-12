import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: this.props.img,
    };
  }

  clickImage = () => {
    if (this.state.picture === this.props.img) {
      this.setState({ picture: this.props.imgClicked });
    } else {
      this.setState({ picture: this.props.img });
    }
  };

  render() {
    return (
        <div onClick={this.clickImage}>
            <img src={this.state.picture} alt="avatar" />
        </div>
    );
  }
}

export default ClickablePicture;
