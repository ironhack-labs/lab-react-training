import React from 'react';
import './LikeButton.css';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfLikes: 0,
    };
  }

  clickButton = () => {
    this.setState((prevState) => {
      return {
        numberOfLikes: prevState.numberOfLikes + 1,
      };
    });
  };
  render() {
    return (
    <div className="likeButton">
      <button onClick={this.clickButton}>
        {this.state.numberOfLikes} Likes
      </button>
    </div>
    );
  }
}

export default LikeButton;
