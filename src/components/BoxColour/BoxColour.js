import React, { Component } from 'react';
import styles from './BoxColour.module.css';

class BoxColour extends Component {
  constructor(props) {
    super(props);
    this.myBackgroundColour = `rgb(${this.props.r},${this.props.g},${this.props.b})`;
  }

  displayHex() {
    let a = this.myBackgroundColour.split('(')[1].split(')')[0];
    let b = a.split(',').map((el) => {
      let x = parseInt(el).toString(16);
      return x.length == 1 ? '0' + x : x;
    });
    return `#${b.join('')}`;
  }

  render() {
    return (
      <div
        className={styles.container}
        style={{
          backgroundColor: `${this.myBackgroundColour}`,
        }}
      >
        <div>{this.myBackgroundColour}</div>
        <div>{this.displayHex()}</div>
      </div>
    );
  }
}

export default BoxColour;
