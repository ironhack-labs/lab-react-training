import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }))
  }
  render() {
    return <img 
      onClick={this.handleClick}
      className="ClickablePicture" 
      src={this.state.isClicked ? this.props.imgClicked : this.props.img} 
      alt="Holi" />
  }
}

export default ClickablePicture;
