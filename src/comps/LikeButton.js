// imports
import React from 'react';

//components
class LikeButton extends React.Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div>
        <button
          onClick={() =>
            this.setState({ ...this.state, counter: this.state.counter + 1 })
          }
        >
          {this.state.counter} Likes
        </button>
      </div>
    );
  }
}

// exports
export default LikeButton;
