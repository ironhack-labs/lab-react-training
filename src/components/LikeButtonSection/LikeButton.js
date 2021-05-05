import React from 'react';
import './LikeButton.css';

export default class LikeButton extends React.Component {
  state = {
    counter: 0,
    colors: [
      'purple',
      'blue',
      'green',
      'yellow',
      'orange',
      'red',
      'tomato',
      'rosa',
      'violet',
    ],
  };

  handleClick = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  render = () => {
    return (
      <div>
        <button
          onClick={this.handleClick}
          className="like-button"
          style={{
            backgroundColor: this.state.colors[
              this.state.counter % this.state.colors.length
            ],
          }}
        >
          {this.state.counter} Likes
        </button>
      </div>
    );
  };
}
