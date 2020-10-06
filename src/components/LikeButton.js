import React, { Component } from 'react';
// React.components
class LikeButton extends Component {
  state = {
    counterValue: 0,
  };

  increment = () => {
    this.setState({
      counterValue: this.state.counterValue + 1,
    });
  };

  render() {
    return (
      <div className="like-button">
        <button onClick={this.increment}>
          {this.state.counterValue} Likes
        </button>
        <button onClick={this.increment}>
          {this.state.counterValue} Likes
        </button>
      </div>
    );
  }
}
export default LikeButton;
