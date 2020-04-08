import React, { Component } from 'react';

const greetings = {
  es: "Hola",
  en: "Hello",
  de: "Hallo",
  fr: "Bonjour"
}

class Greetings extends Component {
  render() {
    const { lang, children} = this.props;
    return (
      <p className="greetings-box">{greetings[lang]} {children}</p>
    )
  }
}

export default Greetings;