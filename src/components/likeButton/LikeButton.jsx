import React from 'react';
import './LikeButton.css';

class LikeButton extends React.Component {
  state = {
    clicks: 0,
    colors: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    counter: 0,
  };

  click = () => {
    this.setState({ clicks: this.state.clicks + 1 });

    if (this.state.counter === this.state.colors.length - 1) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: this.state.counter + 1 });
    }
  
  };

  render() {
    return (
      <div>
        <button
          className="like-button"
          onClick={this.click}
          style={{ backgroundColor: this.state.colors[this.state.counter] }}
        >
          Like {this.state.clicks}
        </button>
      </div>
    );
  }
}
export default LikeButton;
