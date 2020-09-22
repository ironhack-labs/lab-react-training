import React, { Component } from 'react';

class LikeButton extends Component {
  state = {
    likes: 0,
    bgColor: 'purple'
  }

  handleClick = () => {
    this.setState({
      likes: this.state.likes + 1,
      bgColor: ['blue','green','yellow','orange','red','purple'][this.state.likes % 6],
    });
  }


  render() {
    return (
      <button className="like" style={{backgroundColor: this.state.bgColor}} c={this.state.bgColor} onClick={this.handleClick}>
        {this.state.likes} Button    
      </button>
    );
  }
}

export default LikeButton;
