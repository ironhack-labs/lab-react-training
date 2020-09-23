import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Greetings extends Component {
  render() {
    if (this.props.lang === 'fr') {
      return <p>Bonjour François</p>;
    } else if (this.props.lang === 'de') {
      return <p>Hallo Ludwig</p>;
    } else if (this.props.lang === 'en') {
      return <p>Hello Harry</p>;
    } else if (this.props.lang === 'es') {
      return <p>Hola Jose</p>;
    }
  }
}
