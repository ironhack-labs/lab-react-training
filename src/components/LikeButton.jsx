import React, { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  handleClick = () => {
    console.log('stato', this.state);
    this.setState({
      value: this.state.value + 1,
    });
  };
  render() {
    return (
      <div>
        <button
          className="border border-black rounded-md m-4 p-6 bg-green-300 font-semibold"
          onClick={this.handleClick}
        >
          Like {this.state.value}
        </button>
      </div>
    );
  }
}

export default LikeButton;
