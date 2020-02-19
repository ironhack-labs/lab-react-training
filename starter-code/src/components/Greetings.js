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
      <div className="gritin">
        {greetings[this.props.lang]} {this.props.children}
      </div>
    );
  }
  renderABitLonger() {
    if (this.props.lang === 'fr')
      return (
        <div className="gritin">
          Bonjour {this.props.children}
        </div>
      );
    if (this.props.lang === 'de')
      return (
        <div className="gritin">
          Hallo {this.props.children}
        </div>
      );
    if (this.props.lang === 'es')
      return (
        <div className="gritin">
          Hola {this.props.children}
        </div>
      );
    return (
      <div className="gritin">
        Hello {this.props.children}
      </div>
    );
  }
}

export default Greetings;
