import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = { glasses: false };
  }

  toggleGlasses = () => {
    if (this.state.glasses === false) {
      this.setState({
        glasses: true,
      });
    } else if (this.state.glasses === true) {
      this.setState({
        glasses: false,
      });
    }
  };

  render() {
    return (
      <img
        onClick={this.toggleGlasses}
        className="clickable-picture"
        alt="img"
        src={this.state.glasses ? this.props.imgClicked : this.props.img}
      />
    );
  }
}

export default ClickablePicture;
