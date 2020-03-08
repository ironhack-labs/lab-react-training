import React, { Component } from 'react';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imag: this.props.imgs,
      left: this.props.imgs[Math.floor(Math.random() * 4)],
      right: this.props.imgs[Math.floor(Math.random() * 4)]
    };
    this.left = this.left.bind(this);
    this.right = this.right.bind(this);
  }

  left() {
    this.setState({
      left: this.props.imgs[Math.floor(Math.random() * 4)]
    });
  }
  right() {
    this.setState({
      right: this.props.imgs[Math.floor(Math.random() * 4)]
    });
  }
  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '5% auto' }}>
          <img style={{ width: '300px', margin: '5% auto' }} src={this.state.left} alt="women" />
          <button onClick={this.left}>Left</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '5% auto' }}>
          <img style={{ width: '300px', margin: '5% auto' }} src={this.state.right} alt="men" />
          <button onClick={this.right}>Right</button>
        </div>
      </div>
    );
  }
}
