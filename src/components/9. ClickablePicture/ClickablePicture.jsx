import { Component } from 'react';
import './ClickablePicture.css';

export default class ClickablePicture extends Component {
  state = {
    isClicked: false,
  };
  putSunglasses = () => {
    this.setState((previous) => ({
      isClicked: !previous.isClicked,
    }));
  };

  render() {
    return (
      <div>
        <img
          className="sunGlasses"
          src={this.state.isClicked ? this.props.imgClicked : this.props.img}
          onClick={this.putSunglasses}
        />
      </div>
    );
  }
}
