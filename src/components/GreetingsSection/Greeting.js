import React, { Component } from 'react';

export default class Greeting extends Component {
  render() {
    const greetings = {
      fr: 'Bonjour',
      de: 'Hallo',
    };

    return (
      <div className="Row">
        <p>
          {greetings[this.props.lang]} {this.props.children}
        </p>
      </div>
    );
  }
}
