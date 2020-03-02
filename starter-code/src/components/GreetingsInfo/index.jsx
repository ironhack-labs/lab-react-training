import React, { Component } from 'react';
import './style.scss';

class GreetingsInfo extends Component {
  render() {
    const { lang, children} = this.props;
    switch (lang) {
        case 'en':
          return <p>Hello {children} </p>
        case 'de':
          return <p>Hallo {children}</p>
        case 'fr':
          return <p>Bonjur {children}</p>
        case 'es':
          return <p>Olà {children}</p>
        default:
      }
  }
}


export default GreetingsInfo

