import React, { Component } from 'react';
import './ClickablePicture.scss';

class ClickablePicture extends Component {
  state = {
    img: this.props.img,
    imgClicked: this.props.imgClicked
  }

  changeImage = () => {
    if(this.state.img === this.state.imgClicked) {
      this.setState({
        img: this.props.img
      })
    } else {
      this.setState({
        img: this.state.imgClicked
      })
      
    }
  }

  render() {
    return (
      <div>
        <h1>Hola</h1>
        <img src={this.state.img} onClick={this.changeImage} style={{ cursor: 'pointer' }} alt="" />
      </div>
    )
  }
}

export default ClickablePicture;