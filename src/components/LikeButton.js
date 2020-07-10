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
    if (likes === 0 || likes === 6) {
      return { backgroundColor: 'purple' };
    } else if (likes === 1 || likes === 7) {
      return { backgroundColor: 'blue' };
    } else if (likes === 2 || likes === 8) {
      return { backgroundColor: 'green' };
    } else if (likes === 3 || likes === 9) {
      return { backgroundColor: 'yellow' };
    } else if (likes === 4 || likes === 10) {
      return { backgroundColor: 'orange' };
    } else if (likes === 5 || likes === 11) {
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
