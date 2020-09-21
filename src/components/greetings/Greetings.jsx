import React from 'react';
import './Greetings.css';

export default class Greetings extends React.Component {
  getGreeting() {
    let greeting = '';
    switch (this.props.lang) {
      case 'de':
        return 'Hallo'
        break;
      case 'fr':
        return 'Bonjour';
        break;
      case 'es':
        return 'Holi';
        break;
      case 'en':
        return 'Hello';
        break;
    }
  }

  render() {
    return (
      <div lang={this.props.lang} className="Greeting">
        {this.getGreeting()} {this.props.children}
      </div>
    );
  }
}
