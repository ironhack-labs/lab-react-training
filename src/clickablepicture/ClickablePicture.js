import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = {
    clicked: false,
  };

  clickHandler = () => {
    this.setState((state, props) => ({
      clicked: !state.clicked,
    }));
  };
  render() {
    console.log(this.props);
    return (
      <img
        onClick={this.clickHandler}
        src={this.state.clicked ? this.props.img : this.props.imgClicked}
        alt=""
      />
    );
  }
}

export default ClickablePicture;
