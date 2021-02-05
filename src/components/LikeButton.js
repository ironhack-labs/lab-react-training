import React from 'react';

class LikeButton extends React.Component {
  state = {
    count: 0,
    bgColor: ['purple', 'blue', 'green', 'yellow', 'orange', 'red'],
    selectedColor: '',
  };

  handleIncrement = () => {
    var item = this.state.bgColor[
      Math.floor(Math.random() * this.state.bgColor.length)
    ];
    this.setState({ count: this.state.count + 1, selectedColor: item });
  };

  render() {
    return (
      <div style={{ margin: '1rem' }}>
        <button
          style={{ backgroundColor: this.state.selectedColor }}
          onClick={this.handleIncrement}
        >
          {this.state.count} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
