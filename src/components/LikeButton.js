import React from 'react';
import '../App.css';

class LikeButton extends React.Component {
  state = {
    count: 0,
    color: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    selectedColor: 'purple',
  };
  handleIncrementClick = () => {
    let num = this.state.count + 1;
    let colorNum = Math.floor(Math.random() * 6);
    this.setState({
      count: num,
      selectedColor: this.state.color[colorNum],
    });
  };
  render() {
    return (
      <div className="d-inline">
        <button
          className="btn-lg"
          style={{ backgroundColor: `${this.state.selectedColor}` }}
          onClick={this.handleIncrementClick}
        >
          {this.state.count} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
