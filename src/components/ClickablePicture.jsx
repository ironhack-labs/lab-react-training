import React from 'react'
import './ClickablePicture.css'

export default class ClickablePicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: true
    }
  }

  changeImg() {
    this.setState({
      mood: !this.state.mood
    })
  }

  render() {
    return (
      <img 
        src={this.state.mood ? this.props.img : this.props.imgClicked} 
        className="ClickablePicture"
        onClick={() => this.changeImg()}
        alt="User glasses"
      />
    );
  }
}

