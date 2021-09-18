import React from 'react';

class LikeButton extends React.Component {
  state = {
    likes: 0,
  };

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return <button onClick={this.addLike}>{this.state.likes} likes</button>;
  }
}

export default LikeButton;
