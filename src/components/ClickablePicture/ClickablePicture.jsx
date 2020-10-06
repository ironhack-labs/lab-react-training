import React, { Component } from 'react';
import './ClickablePicture.css';



export default class ClickablePicture extends Component {
  state = {
    open: true,
  };

  toggleImgae = () => {
    this.setState((state) => ({ open: !state.open }));
    console.log('i am clicked');
    return;
  };

  render() {
    return (
      <div className="ClickablePicture" onClick={(event) => this.toggleImgae()}>
        {this.state.open && <img src={this.props.img} alt="img"/>}
        {!this.state.open && <img src={this.props.imgClicked} alt="img"/>}
      </div>
    );
  }
}
