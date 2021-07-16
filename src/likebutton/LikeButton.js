import React from 'react';
import './LikeButton.css';


class LikeButton extends React.Component {
  state = {
    count: 0
  };

  handleIncrementClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <button className="like" onClick={this.handleIncrementClick}>{this.state.count}</button>
    );
  };

};

export default LikeButton;
