import React, { Component } from 'react'

class ClickablePicture extends Component {
  state = {
    isClicked: false,
    imgSrc: this.props.img
  }


  handleImgClick = () => {
    this.setState({isClicked: !this.state.isClicked});
    this.state.isClicked ?  this.setState({imgSrc: this.props.imgClicked}) : this.setState({imgSrc: this.props.img});
  }

  render() {
    return (
      <div>
        <img onClick={this.handleImgClick} src={this.state.imgSrc} alt="Changing image"/>
      </div>
    )
  }
}

export default ClickablePicture;
