import React, { Component } from 'react'

export default class ClickablePicture extends Component {
  state = {
    currentImg: this.props.img
  }

  toggleImage = () => {
    if (this.state.currentImg === this.props.img) {
      this.setState({ currentImg: this.props.imgClicked })
    } else {
      this.setState({ currentImg: this.props.img })
    }
  }

  render() {
    return (
      <div onClick={this.toggleImage}>
        <img src={this.state.currentImg} alt='clickable pic' />
      </div>
    )
  }
}
