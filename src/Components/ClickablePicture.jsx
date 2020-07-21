import React, { Component } from 'react';
import './../App.css';

export class ClickablePicture extends Component {
  state = {
    sunglasses: false,
  };

  handleSunglasses = () => {
    this.setState({ sunglasses: !this.state.sunglasses });
  };

  render() {
    const { img, imgClicked } = this.props;
    const { sunglasses } = this.state;
    return (
      <div>
        <img
          src={sunglasses ? imgClicked : img}
          onClick={this.handleSunglasses}
          alt="put your sunglasses stp"
        />
      </div>
    );
  }
}

export default ClickablePicture;
