import React, { Component } from 'react';
import './Greetings.css';

class Greetings extends Component {
  render() {
    const { lang, children } = this.props;

    // eslint-disable-next-line default-case
    switch (lang) {
      case 'de':
        return (
          <div className="greetings">
            <span>Hallo {children}</span>
          </div>
        );
      case 'en':
        return (
          <div className="greetings">
            <span>Hello {children}</span>
          </div>
        );
      case 'es':
        return (
          <div className="greetings">
            <span>Hola {children}</span>
          </div>
        );
      case 'fr':
        return (
          <div className="greetings">
            <span>Bonjour {children}</span>
          </div>
        );
    }
  }
}

export default Greetings;
