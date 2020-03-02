import React, { Component } from 'react';

class Greetings extends React.Component {
  render() {
    const { lang, children } = this.props;

    // eslint-disable-next-line default-case
    switch (lang) {
      case 'de':
        return <p className="greetings">Halo {children}</p>;
      case 'en':
        return <p className="greetings">Hello {children}</p>;
      case 'es':
        return <p className="greetings">Hola {children}</p>;
      case 'fr':
        return <p className="greetings">Bonjour {children}</p>;
    }
  }
}

export default Greetings;
