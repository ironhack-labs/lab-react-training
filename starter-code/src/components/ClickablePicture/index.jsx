import React, { Component } from "react";

class ClickablePicture extends Component {
  state = {
    imgUnclicked: `./img/persons/maxence-glasses.png`,
    imgClicked: `./img/persons/maxence.png`,
    img: `./img/persons/maxence.png`
  };

  handleClick = () => {
    this.setState({
      img:
        this.state.img === this.state.imgClicked
          ? this.state.imgUnclicked
          : this.state.imgClicked
    });
  };
  render() {
    return (
      <div className="glasses-photo">
        <img onClick={this.handleClick} src={this.state.img} alt="alt" />
      </div>
    );
  }
}

export default ClickablePicture;
