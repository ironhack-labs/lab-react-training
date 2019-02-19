import React, { Component } from 'react';

class ClickablePicture extends Component {
  constructor(props) {
    super(props)
    // The initial state
    this.state = {
      isClicked: false
    }
    // Because handleClick is triggered by onClick, it must be bound at least once
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
      alt="image" />
  }
}

export default ClickablePicture;
