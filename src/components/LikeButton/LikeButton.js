import React from 'react';
import "./LikeButton.css"

class LikeButton extends React.Component {
  state = {
    likes: 0,
  };

  addLike = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount,
    });
  };

  render() {
    return <button className="myButton"
    onClick={this.addLike}>Likes: {this.state.likes} 
    </button>;
  }
}


export default LikeButton;