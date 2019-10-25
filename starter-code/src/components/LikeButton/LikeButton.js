import React, { Component } from 'react';

class LikeButton extends Component {
  state = {
    likes: 0,
    color: '',
  }

  likerClick = () => {
    const colors = ['purple','blue','green','yellow','orange','red'];    
    let randomOne = colors[Math.floor(Math.random() * colors.length)];
    this.setState ({
      likes: this.state.likes + 1,
      color: randomOne
    });
  }

  render () {
    return (
      <div>
        <button onClick={this.likerClick} style={{backgroundColor: this.state.color, color: 'white'}}>
          {this.state.likes} <strong>Likes</strong>
        </button>
      </div>
    );
  }
};

export default LikeButton;
