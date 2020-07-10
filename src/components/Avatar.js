import React, { Component } from 'react';
import CssOptions from './CssOptions';
import './Avatar.css';

class Avatar extends Component {
  render() {
    let classAvatar = 'img ';
    Object.keys(this.props).map((p) => {
      if (CssOptions[p]) {
        classAvatar += CssOptions[p] + ' ';
      }
      return true;
    });
    let styleAvatar = { width: this.props.width, height: this.props.height };
    return (
      <img
        className={classAvatar}
        src={this.props.src}
        style={styleAvatar}
        alt={this.props.alt}
      />
    );
  }
}
export default Avatar;
