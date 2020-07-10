import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    let helloTest = 'Hello';
    switch (this.props.lang) {
      case 'es':
        helloTest = 'Hola';
        break;
      case 'fr':
        helloTest = 'Bounjour';
        break;
      case 'de':
        helloTest = 'Hallo';
        break;
      default:
        helloTest = 'Hello';
        break;
    }
    return (
      <h1 className="card">
        {helloTest} {this.props.children}
      </h1>
    );
  }
}
export default Greetings;
