import React, { Component } from 'react';

import './LikeButton.css';

class LikeButton extends Component {
  state = {
    nrOfLikes: 0,
    backColors: ['purple','blue','green','yellow','orange','red']
  }

  increaseLikes = () => {
    this.setState({
      nrOfLikes: this.state.nrOfLikes + 1
    })
  }

  calcBackgroundColor = () => {
    let colorIndex = this.state.nrOfLikes % this.state.backColors.length 
    return this.state.backColors[colorIndex]
  }

  render() {
    const divStyle = {
      backgroundColor: this.calcBackgroundColor() 
    }

    return (
      <div className="like-button" onClick={this.increaseLikes} style={divStyle}>
          { this.state.nrOfLikes } Likes
        </div>
    );
  }
}

export default LikeButton;