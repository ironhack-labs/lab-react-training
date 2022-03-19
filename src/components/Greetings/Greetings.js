import React, { Component } from 'react';
import styles from './Greetings.module.css';

class Greetings extends Component {
  constructor(props) {
    super(props);
  }

  languages = {
    de: 'Hallo',
    en: 'Hey',
    es: 'Hola',
    fr: 'Bonjour',
  };

  render() {
    return (
      <div className={styles.container}>{`${this.languages[this.props.lang]} ${
        this.props.children
      }`}</div>
    );
  }
}

export default Greetings;
