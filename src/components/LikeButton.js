// components/LikeButton.js

import React, { Component } from 'react';

class LikeButton extends Component {
  state = {
    likes: 0,
    backgroundColor: 'purple',
  }

  incrementLikes = () => {
    const { likes } = this.state;
    this.setState({
      likes: likes + 1,
    })
  }

  changeBackground = () => {
    const { backgroundColor } = this.state;
    const backgrounds = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const colorIndex = (backgrounds.indexOf(backgroundColor) + 1) % backgrounds.length;
    this.setState({
      backgroundColor: backgrounds[colorIndex],
    })
  }

  handleClick = () => {
    this.incrementLikes();
    this.changeBackground();    
  }

  render() {
    const { likes, backgroundColor } = this.state;
    const divStyle = {
      color: 'white',
      backgroundColor,
    }
    return (
      <button onClick={this.handleClick} className='like-button' style={divStyle}>
        {likes} Likes
      </button>
    );
  }
}

export default LikeButton;
