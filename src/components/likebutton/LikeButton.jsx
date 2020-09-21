import React from 'react';
import './LikeButton.css';

export default class LikeButton extends React.Component {
  state = { count: 0 };

  getLike() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <button className="btn" onClick={() => this.getLike()}>
        {this.state.count} Like
      </button>
    );
  }
}
