import React, { Component } from 'react';
import './ClickablePicture.css'

class ClickablePicture extends Component {

  state = {
    picture: this.props.img
  }

  handleClick = () => {
    this.setState({
      picture: this.state.picture === this.props.img ?
      this.props.imgClicked:
      this.props.img
    })
  }

  render() {
    return (
        <img className='ClickablePicture' src={this.state.picture} alt='picture' onClick={this.handleClick} />
    )
  }
}

export default ClickablePicture;