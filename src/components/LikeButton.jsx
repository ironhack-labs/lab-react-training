import React, { Component } from 'react';

const colors = ['purple', 'green', 'red', 'yellow', 'dodgerblue'];

export class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const color = colors[this.state.counter % colors.length];

    const btnStyle = {
      backgroundColor: color,
      padding: '10px 20px',
      color: 'white',
    };

    return (
      <div>
        <button onClick={this.handleClick} style={btnStyle}>
          {this.state.counter} {this.state.counter < 2 ? 'Like' : 'Likes'}
        </button>
      </div>
    );
  }
}

export default LikeButton;
