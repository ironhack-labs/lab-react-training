import React, { Component } from 'react';

class Greetings extends Component {
  render() {
    let greeting = 'hols';
    switch (this.props.lang) {
      case 'es':
        greeting = 'Hola';
        break;
      case 'en':
        greeting = 'Hello';
        break;
      case 'de':
        greeting = 'Hallo';
        break;
      case 'fr':
        greeting = 'Bonjour';
        break;
    }

    return (
      <div className="card">
        <p>
          {greeting} {this.props.children}{' '}
        </p>
      </div>
    );
  }
}

export default Greetings;
