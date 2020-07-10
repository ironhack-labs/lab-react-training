import React, { Component } from 'react';
import './LikeButton.css';
class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
  }
  clickLike = () => {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const styleLikeButton = {
      backgroundColor: colors[Math.floor(Math.random() * 6)],
    };
    this.setState({ likes: this.state.likes + 1, style: styleLikeButton });
  };
  render() {
    return (
      <button
        className="LikeButton"
        style={this.state.style}
        onClick={this.clickLike}
      >
        {this.state.likes}&nbsp;Likes
      </button>
    );
  }
}

export default LikeButton;
