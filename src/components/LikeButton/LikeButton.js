import React, { Component } from 'react'; 
import './LikeButton.css';

export default class LikeButton extends Component {
  state = {
    liked: 0,
    colorIndex: 0
  }

  pressLikeBtn = () => {
    if (this.state.colorIndex + 1 < 6) {
      this.setState({
        liked: this.state.liked + 1,
        colorIndex: this.state.colorIndex + 1
      })
    } else {
      this.setState({
        liked: this.state.liked + 1,
        colorIndex: 0
      })
    }  
  }

  render() {
    const colors = ['purple','blue','green','yellow','orange','red'];
    const buttonStyle = {
      backgroundColor: colors[this.state.colorIndex]
    }

    return (
      <button 
        className='like-button'
        style={buttonStyle} 
        onClick={this.pressLikeBtn}
      >
          {this.state.liked} Likes
      </button>
    )
  }
}
