import React, { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
  }

  countClick = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  divStyle = (likes) => {
    if (likes === 0) {
      return { backgroundColor: 'purple' };
    } else if (likes === 1) {
      return { backgroundColor: 'blue' };
    } else if (likes === 2) {
      return { backgroundColor: 'green' };
    } else if (likes === 3) {
      return { backgroundColor: 'yellow' };
    } else if (likes === 4) {
      return { backgroundColor: 'orange' };
    } else if (likes === 1) {
      return { backgroundColor: 'red' };
    }
  };

  render() {
    return (
      <button
        className="cool-button"
        onClick={this.countClick}
        style={this.divStyle(this.state.likes)}
      >
        {this.state.likes} Likes
      </button>
    );
  }
}

export default LikeButton;
