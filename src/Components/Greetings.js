//1. Import
import React, { Component } from 'react';
import '../Greetings.css'

// 2. Function || Class & Export
export default class Greetings extends Component {
  render() {
    if (this.props.lang === 'fr')
      return (
        <div className="greets">
          Bonjour {this.props.children}
        </div>
      );
    if (this.props.lang === 'de')
      return (
        <div className="greets">
          Hallo {this.props.children}
        </div>
      );
    if (this.props.lang === 'es')
      return (
        <div className="greets">
          Hola {this.props.children}
        </div>
      );
    return (
      <div className="greets">
        Hello {this.props.children}
      </div>
    );
  }
}
