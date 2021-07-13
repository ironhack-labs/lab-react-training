import React, { Component } from 'react';
import './Greetings.css';

export default class Greetings extends Component {
  render() {
    let greet = '';
    switch (this.props.lang) {
      case 'de':
        greet = 'Hallo';
        break;
      case 'fr':
        greet = 'Bonjour';
        break;
      case 'mx':
        greet = 'Que onda';
        break;
      default:
        greet = 'Hello';
    }
    return (
      <div className="containerGreetings">
        <p>
          {greet} {this.props.children}
        </p>
      </div>
    );
  }
}
