import React from 'react';

class LikeButton extends React.Component {
  state = {
    amountOfLikes: 0,
    color: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
  };

  handleLike = () => {
    this.setState({ amountOfLikes: this.state.amountOfLikes + 1 });
  };

  render() {
    return (
      <button
        onClick={this.handleLike}
        style={{
          backgroundColor: this.state.color[this.state.amountOfLikes % 6],
        }}
      >
        {this.state.amountOfLikes} Likes
      </button>
    );
  }
}

export default LikeButton;