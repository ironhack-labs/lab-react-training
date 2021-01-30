import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    let greetings = {
      de: 'Hallo',
      en: 'Hello',
      fr: 'Bonjour',
      es: 'Hola',
    }
    return (
      <div className="box">
        {greetings[this.props.lang]} {this.props.children}
      </div>
    );
  }
}

  export default Greetings;