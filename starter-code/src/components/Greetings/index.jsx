/* eslint-disable default-case */
import React, { Component } from 'react';


class Greetings extends Component {
  render() {

    const { lang } = this.props;

    switch (lang) {
      case 'de':
        return <span>Hallo {this.props.children}</span>;
      case 'en':
        return <span>Hello {this.props.children}</span>;
      case 'fr':
        return <span>Bonjouir {this.props.children}</span>;
      case 'pt':
        return <span>Olá {this.props.children}</span>;
    }
  }
};


export default Greetings;