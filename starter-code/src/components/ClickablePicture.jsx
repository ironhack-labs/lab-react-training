import React from "react";

class ClickablePicture extends React.Component {
  state = {
    imgPath: "/img/persons/maxence.png",
    value: true

  };

  handleClick = () => {
    let newValue = !this.state.value;
    let newPath;
    if (newValue) {
      newPath = "/img/persons/maxence.png";
    } else {
      newPath = "/img/persons/maxence-glasses.png";
    }
    this.setState({
      imgPath: newPath,
      value: newValue
    })
  };

  render() {
    return (
      <img onClick={this.handleClick} className="ClickablePicture" src={this.state.imgPath} alt=""/>
    );
  }
}

export default ClickablePicture;