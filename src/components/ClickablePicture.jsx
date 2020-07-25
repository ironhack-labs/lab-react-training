import React, { Component } from 'react';

export class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.img,
    };
  }
  click = (e) => {
    // if (this.state.avatar === this.props.img) {
    //     this.setState({ avatar: this.props.imgClicked });
    //   } else {
    //     this.setState({ avatar: this.props.img });

    //Ternario test
    this.state.avatar === this.props.img
      ? this.setState({ avatar: this.props.imgClicked })
      : this.setState({ avatar: this.props.img });
  };
  render() {
    return (
      <div onClick={this.click}>
        <img src={this.state.avatar} alt="avatar" />
      </div>
    );
  }
}

export default ClickablePicture;
