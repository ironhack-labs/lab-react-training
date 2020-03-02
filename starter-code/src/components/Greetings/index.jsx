import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    const { lang, children } = this.props;

    switch (lang) {
      case 'de':
        return <div>Hallo {children}</div>;
        break;
      case 'fr':
        return <div>Bon Jour {children}</div>;
        break;
      case 'es':
        return <div>Hola {children}</div>;
        break;
      case 'en':
        return <div>Hello {children}</div>;
        break;
      default:
        return <div> Which Language </div>;
    }
  }
}

export default Greetings;
