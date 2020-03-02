import React, { Component } from 'react';

class Greetings extends React.Component {
  render() {
    const { lang, children } = this.props;

    // eslint-disable-next-line default-case
    switch (lang) {
      case 'de':
        return <p>Halo {children}</p>;
      case 'en':
        return <p>Hello {children}</p>;
      case 'es':
        return <p>Hola {children}</p>;
      case 'fr':
        return <p>Bonjour {children}</p>;
    }
  }
}

export default Greetings;
