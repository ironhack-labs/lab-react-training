import React, { Component } from 'react';
import styles from './LikeButton.module.css';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3,
      color: 'white',
    };
    this.bg = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  }

  handleClick = () => {
    let random = Math.ceil(Math.random() * this.bg.length);

    this.setState({
      count: (this.state.count += 1),
      color: this.bg[random],
    });
  };

  render() {
    return (
      <div>
        <button
          className={styles.button}
          style={{ backgroundColor: `${this.state.color}` }}
          onClick={() => {
            this.handleClick();
          }}
        >
          {this.state.count} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
