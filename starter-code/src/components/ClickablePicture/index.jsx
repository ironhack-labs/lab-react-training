import React, { Component } from "react";

class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false
    };
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }))
  }
  

  render() {
    return (
      <div>
        <img
          className="clickablePicture"
          src={this.state.isClicked ? this.props.imgClicked : this.props.img }
          height="400"
          width="400"
          alt=""
          onClick={() => this.handleClick()}
        />
      </div>
    );
  }
}

export default ClickablePicture;
