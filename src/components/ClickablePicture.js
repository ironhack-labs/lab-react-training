import React, { Component } from 'react';

export default class ClickablePicture extends Component {
  state = {
    trigger: true,
  };

  clickPic = () => {
    if (this.state.trigger === true) {
      this.setState({ trigger: false });
    } else {
      this.setState({ trigger: true });
    }
  };

  returnImg = () => {
    return this.state.trigger ? this.props.img : this.props.imgClicked;
  };
  render() {
    return (
      <div className="columns">
        <div className="column">
          <figure className="image is-128x128">
            <img src={this.returnImg()} alt="" onClick={this.clickPic} />
          </figure>
        </div>
      </div>
    );
  }
}
