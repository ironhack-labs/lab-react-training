import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = {
    isClicked: false,
  };

  handleChange = () => {
    //console.log('change change');
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  render() {
    return (
      <div onClick={this.handleChange}>
        <img
          style={{ width: '200px' }}
          src={this.state.isClicked ? this.props.imgClicked : this.props.img}
          alt="maxence"
        />
      </div>
    );
  }
}

export default ClickablePicture;
