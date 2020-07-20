import React, { Component } from 'react';
import './Components.css';

export class Greetings extends Component {
  render() {
    return (
      <div className="interation2">
        {this.props.lang === 'fr' ? (
          <p>Bonjour {this.props.children}</p>
        ) : this.props.lang === 'de' ? (
          <p>Hallo {this.props.children}</p>
        ) : (
          <p>No language</p>
        )}
      </div>
    );
  }
}

export default Greetings;
