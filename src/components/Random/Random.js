import React, { Component } from 'react';
import styles from './Random.module.css';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: Math.floor(Math.random() * props.max) + props.min,
    };
  }

  render() {
    return (
      <div className={styles.container}>
        Random value between{' '}
        {`${this.props.min} and ${this.props.max} => ${this.state.randomNumber}`}
      </div>
    );
  }
}

export default Random;
