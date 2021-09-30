import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    glasses: false,
  };

  handleIncrementClick = () => {
    this.setState({
      glasses: !this.state.glasses,
    });
  };

  render() {
    // let currentPic = ""
    // if (this.state.glasses) {
    //     currentPic = this.props.img
    // }else{
    //     currentPic = this.props.imgClicked
    // }

    return (
      // fancy stuff with a ternary operator
      <img
        onClick={this.handleIncrementClick}
        src={this.state.glasses ? this.props.img : this.props.imgClicked}
      ></img>
    );
  }
}

export default ClickablePicture;
