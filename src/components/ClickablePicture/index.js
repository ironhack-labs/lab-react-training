import React, { Component } from 'react'

export default class ClickablePicture extends Component {
  state = {
    isClicked: false,
  }

  showImg = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    })
  }
  render() {
    return (
      <div>
        <img
          src={this.state.isClicked ? this.props.imgClicked : this.props.img}
          onClick={this.showImg}
          alt=""
        />
      </div>
    )
  }
}
