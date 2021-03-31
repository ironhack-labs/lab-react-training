import React, { Component } from 'react';
import profiles from './data/berlin.json';

class Facebook extends Component {
  state = {
    profiles: [...profiles],
    city: '',
  };

  onClick = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const imgPath = this.state.toggle ? this.props.imgClicked : this.props.img;

    return (
      <div className="Facebook">
        <img
          style={{ maxWidth: '100px' }}
          src={imgPath}
          alt="Clickable pic"
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default Facebook;
