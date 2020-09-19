import React from 'react';
import './Greetings.css';

export default class Greetings extends React.Component {
  getGreeting() {
    let greeting = '';
    switch (this.props.lang) {
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      case 'es':
        return 'Holi';
      case 'en':
        return 'Hello';
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
