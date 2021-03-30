import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = {
    toggle: true,
  };

  toggleImage = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const imgPath = this.state.toggle ? this.props.imgClicked : this.props.img;

    return (
      <div className="ClicablePicture">
        <img
          style={{ maxWidth: '100px' }}
          src={imgPath}
          onClick={this.toggleImage}
        />
      </div>
    );
  }
}

export default ClickablePicture;
