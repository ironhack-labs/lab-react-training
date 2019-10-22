import React, { Component } from 'react';
// import {image} from './';

class ClickablePicture extends Component {
  state = {
    imageOne: {
      img: "/img/persons/maxence.png"
    }
  }
  clickHandler = () => {
    this.setState({
      imageOne: {
        img: "/img/persons/maxence-glasses.png"
      }
    })
  }

  render() {
    return (
      <div>

        <img src={this.state.imageOne.img} onClick={this.clickHandler} alt="" />

      </div>
    )
  }
}

export default ClickablePicture; 