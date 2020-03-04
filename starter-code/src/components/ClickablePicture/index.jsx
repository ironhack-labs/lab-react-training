import React, { Component } from 'react';
import './style.scss';

class ClickablePicture extends Component {
  constructor() {
    super();
    this.state = {
      picture: true
    };
    this.changePicture = this.changePicture.bind(this);
  }

  changePicture() {
    this.setState(previousState => ({
      picture: !previousState.picture
    }));
  }

  render() {
    return (
      <div className="boss">
        <button onClick={this.changePicture}>Change Picture</button>
        {(this.state.picture && <img src={this.props.img} alt="max pence" />) || (
          <img src={this.props.imgClicked} alt="max pence the boss" />
        )}
      </div>
    );
  }
}

export default ClickablePicture;
