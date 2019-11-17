import React, { Component } from 'react';

export class Greetings extends Component {
  
  render() {
    const languageHello = {
      de: 'Hallo',
      en: 'Hello',
      es: 'Hola',
      fr: 'Bonjour'
    }

    return (
      <div className="box">{languageHello[this.props.lang]} {this.props.children}</div>
    )
  }
}

export default Greetings;
