import React from 'react';
import './LikeButton.css';

const purple = '#800080';
const blue = '#7fffd4';

class LikeButton extends React.Component {
  state = {
    counter: 0,
    color: purple,
  };

  handleCounter = () => {
    const newColor = this.state.color == purple ? blue : purple;

    this.setState({
      counter: (this.state.counter += 1),
      color: newColor,
    });
  };

  render() {
    return (
      <div className="buttons">
        <button
          style={{ background: this.state.color }}
          className="button-like"
          onClick={this.handleCounter}
        >
          {this.state.counter} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
