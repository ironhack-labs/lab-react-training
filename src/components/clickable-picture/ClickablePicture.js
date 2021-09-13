import { Component } from "react";

class ClickablePicture extends Component {
  state = {
    isClicked: false,
  };

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }));
  }

  render() {
    return (
      <img
        onClick={this.handleClick}
        src={this.state.isClicked ? this.props.imgClicked : this.props.img}
        alt={this.state.isClicked ? `Person wearing glasses` : `Person without glasses`}
      />
    );
  }
}

export default ClickablePicture