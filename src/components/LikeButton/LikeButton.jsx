import React, { Component } from 'react';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrease = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  render() {
    return (
      <div
        style={{ width: '150px' }}
        className="mt-5 d-flex align-items-center justify-content-between"
      >
        <LikeButton type="primary" action={this.handleIncrement}>
          {' '}
          +{' '}
        </LikeButton>
        <div className="py-3">{this.state.count}</div>
        <LikeButton type="warning" action={this.handleDecrease}>
          {' '}
          -{' '}
        </LikeButton>
      </div>
    );
  }
}

export default LikeButton;
