import React, { Component } from "react";

//Iteration 9
class ClickablePicture extends Component {
    state = {
        clicked: false
      }

    handleClick = () => {
        this.setState(({ clicked }) => ({ clicked: !clicked }))
      }

    render() {

    let imgsrc;

    if (this.state.clicked === false) {
      imgsrc = this.props.img
    } else {
        imgsrc = this.props.imgClicked
    }
          return (
              <img onClick={this.handleClick} src={imgsrc}></img>
          )
      }
}

export default ClickablePicture;
