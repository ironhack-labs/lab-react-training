import React, { Component } from 'react';

class Greetings extends Component {
  state = {
    language: {
      de: "Hallo",
      fr: "Bonjour",
      es: "Hola",
      en: "Hello"
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.language[this.props.lang]}, {this.props.children}</h1>
      </div>
    )
  }
}

export default Greetings;